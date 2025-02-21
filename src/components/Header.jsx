import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { useState } from "react";
import emailjs from "emailjs-com";

import { brainwave } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = (e) => {
    if (!openNavigation) return;
    
    const href = e.currentTarget.getAttribute('href');
    if (href === '#home') {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
    
    enablePageScroll();
    setOpenNavigation(false);
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
    setError("");
    setEmail("");
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSendEmail = async (e) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setError("Invalid email format");
      return;
    }

    setLoading(true);

    try {
      const templateParams = {
        to_email: email,
        message: "Request for Early access!", 
      };

      const result = await emailjs.send(
        "service_7fhtzgg",   // Replace with your EmailJS Service ID
        "template_kh7ly6s",  // Replace with your EmailJS Template ID
        templateParams,      
        "w0b09IH6ZoJ4-Sey7"  // Replace with your EmailJS Public Key
      );

      console.log("Email sent successfully:", result.text);
      alert(`Request sent successfully`);
      setIsPopupOpen(false);
      setEmail("");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"}`}>
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a 
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }}
          className="text-2xl font-bold text-n-1/90 hover:text-n-1 transition-colors"
        >
          AI RecruiterX
        </a>

        <nav className={`${openNavigation ? "flex" : "hidden"} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors 
                  ${item.onlyMobile ? "lg:hidden" : ""} 
                  px-6 py-6 md:py-8 
                  lg:text-xs lg:font-semibold 
                  text-n-1/50 
                  lg:leading-5 
                  hover:text-n-1`}
              >
                {item.title}
              </a>
            ))}
          </div>
          <HamburgerMenu />
        </nav>

        <Button className="hidden lg:flex" onClick={togglePopup}>Early Access</Button>
        <Button className="ml-auto lg:hidden" px="px-3" onClick={toggleNavigation}>
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>

      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
          <div className="absolute top-[5rem] left-1/2 transform -translate-x-1/2 bg-n-8 p-10 rounded-2xl border border-n-1/10 shadow-lg w-[500px] text-center flex flex-col items-center backdrop-blur-sm">
            <h2 className="h4 mb-4">Get Early Access</h2>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 bg-n-7 border border-n-1/10 rounded-xl mb-3 text-n-1 focus:outline-none focus:border-n-1/20"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

            <div className="flex justify-center mt-4 space-x-4">
              <Button 
                className={`min-w-[150px] ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                onClick={togglePopup} 
                disabled={loading}
                white
              >
                Cancel
              </Button>
              <Button
                className={`min-w-[150px] ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                onClick={handleSendEmail}
                disabled={loading}
              >
                {loading ? "Sending..." : "Send"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
