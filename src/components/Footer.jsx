import React from "react";
import Section from "./Section";
import { navigation } from "../constants";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container max-w-full px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 px-8 py-12 bg-n-8/90 backdrop-blur-sm rounded-2xl border border-n-1/10 mx-auto max-w-[90rem]">
          
          {/* Company Info */}
          <div className="flex flex-col space-y-6 md:w-1/3">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-10 bg-gradient-to-b from-primary-500 to-primary-400"></div>
              <h3 className="h3 bg-gradient-to-r from-n-1 to-n-3 bg-clip-text text-transparent">
                AI RecruiterX
              </h3>
            </div>
            <p className="body-2 text-n-4 leading-relaxed">
              AI-driven hiring. Smarter recruitment. Faster growth.
            </p>
            <p className="caption text-n-4/75 font-medium">
              © {new Date().getFullYear()} AI RecruiterX. All rights reserved.
            </p>
          </div>

          {/* Navigation Links
          <div className="flex flex-col space-y-6 md:w-1/3">
            <h4 className="text-xl font-bold text-n-1">Navigation</h4>
            <div className="grid grid-cols-2 gap-4">
              {navigation
                .filter(item => !item.onlyMobile)
                .map(item => (
                  <a
                    key={item.id}
                    href={item.url}
                    className="flex items-center gap-2 text-n-4 hover:text-primary-500 transition-colors group"
                  >
                    <div className="w-1 h-1 rounded-full bg-primary-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="body-2">{item.title}</span>
                  </a>
                ))}
            </div>
          </div> */}

          {/* Contact Info */}
          <div className="flex flex-col space-y-6 md:w-1/3">
            <h4 className="text-xl font-bold text-n-1">Contact Us</h4>
            <div className="space-y-4">
              <a 
                href="https://www.AIRecruiterX.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-n-4 hover:text-primary-500 transition-colors group"
              >
                <div className="p-2 rounded-lg bg-n-7 group-hover:bg-primary-500/10 transition-colors">
                  <span className="text-xl">🌐</span>
                </div>
                <span className="body-2">www.AIRecruiterX.com</span>
              </a>
              <a 
                href="mailto:contact@AIRecruiterX.com"
                className="flex items-center gap-3 text-n-4 hover:text-primary-500 transition-colors group"
              >
                <div className="p-2 rounded-lg bg-n-7 group-hover:bg-primary-500/10 transition-colors">
                  <span className="text-xl">📧</span>
                </div>
                <span className="body-2">contact@AIRecruiterX.com</span>
              </a>
              <a 
                href="tel:+917010662317"
                className="flex items-center gap-3 text-n-4 hover:text-primary-500 transition-colors group"
              >
                <div className="p-2 rounded-lg bg-n-7 group-hover:bg-primary-500/10 transition-colors">
                  <span className="text-xl">📱</span>
                </div>
                <span className="body-2">+91-7010662317</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          {/* <div className="flex flex-col space-y-6 md:w-1/3">
            <h4 className="text-xl font-bold text-n-1">Quick Links</h4>
            <div className="grid grid-cols-2 gap-4">
              <a href="#features" className="text-n-4 hover:text-primary-500 transition-colors body-2">Features</a>
              <a href="#how-to-use" className="text-n-4 hover:text-primary-500 transition-colors body-2">How It Works</a>
              <a href="#pricing" className="text-n-4 hover:text-primary-500 transition-colors body-2">Pricing</a>
              <a href="#about" className="text-n-4 hover:text-primary-500 transition-colors body-2">About Us</a>
            </div>
          </div> */}

        </div>
      </div>
    </Section>
  );
};

export default Footer;
