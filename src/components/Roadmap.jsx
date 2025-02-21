import { useState } from "react";
import emailjs from "emailjs-com";
import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { roadmap } from "../constants";
import { check2, grid, loading1 } from "../assets";
import { Gradient } from "./design/Roadmap";

const Roadmap = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

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
        "service_7fhtzgg",
        "template_kh7ly6s",
        templateParams,      
        "w0b09IH6ZoJ4-Sey7"
      );

      console.log("Email sent successfully:", result.text);
      alert(`Request sent successfully`);
      setIsPopupOpen(false);
      setEmail("");
      setError("");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setEmail("");
    setError("");
  };

  return (
    <Section className="overflow-hidden" id="roadmap">
      <div className="container md:pb-10">
        <Heading tag="" title="Get Early Access!" />

        <div className="flex flex-col items-center justify-center mb-16 max-w-[500px] mx-auto">
          <div className="w-full p-10 bg-n-8 rounded-2xl border border-n-1/10 shadow-lg backdrop-blur-sm">
            <h2 className="h4 mb-4 text-center">Get Early Access</h2>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 bg-n-7 border border-n-1/10 rounded-xl mb-3 text-n-1 focus:outline-none focus:border-n-1/20"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && <p className="text-red-500 text-sm mb-3 text-center">{error}</p>}

            <div className="flex justify-center mt-4 space-x-4">
              <Button 
                className={`min-w-[150px] ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                onClick={handleCancel}
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

        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          {roadmap.map((item) => {
            const status = item.status === "done" ? "Done" : "In progress";

            return (
              <div
                className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                  item.colorful ? "bg-conic-gradient" : "bg-n-6"
                }`}
                key={item.id}
              >
                <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                  <div className="absolute top-0 left-0 max-w-full">
                    <img
                      className="w-full"
                      src={grid}
                      width={550}
                      height={550}
                      alt="Grid"
                    />
                  </div>
                  <div className="relative z-1">
                    <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                      <Tagline>{item.date}</Tagline>

                      <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                        <img
                          className="mr-2.5"
                          src={item.status === "done" ? check2 : loading1}
                          width={16}
                          height={16}
                          alt={status}
                        />
                        <div className="tagline">{status}</div>
                      </div>
                    </div>

                    <div className="mb-10 -my-10 -mx-15">
                      <img
                        className="w-full"
                        src={item.imageUrl}
                        width={628}
                        height={426}
                        alt={item.title}
                      />
                    </div>
                    <h4 className="h4 mb-4">{item.title}</h4>
                    <p className="body-2 text-n-4">{item.text}</p>
                  </div>
                </div>
              </div>
            );
          })}

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Roadmap;
