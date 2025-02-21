import Section from "./Section";
import { stars, check } from "../assets";
import Heading from "./Heading";

const Pricing = () => {
  const chose = [
    "Save 80% of hiring time",
    "AI-driven decision-making for accurate shortlisting",
    "Reduce hiring costs with automation",
    "Seamless integration with job portals & meeting platforms",
    "Data security & compliance with industry standards",
  ];

  return (
    <Section className="overflow-hidden" id="pricing">
      <Heading title="Why Choose AI RecruiterX?" />
      <div className="flex justify-center mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl">
          {chose.map((choose, index) => (
            <div 
              key={index}
              className="group relative p-6 bg-n-8/90 backdrop-blur-sm rounded-2xl border border-n-1/10 hover:border-n-1/20 transition-all duration-300 overflow-hidden"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-n-1/10 backdrop-blur-sm">
                    <img 
                      src={check} 
                      width={24} 
                      height={24} 
                      alt="check" 
                      className="text-primary-500 group-hover:scale-110 transition-transform duration-300" 
                    />
                  </div>
                  <div className="h-px flex-1 bg-n-1/10 group-hover:bg-n-1/20 transition-colors duration-300" />
                </div>
                
                <p className="body-2 text-n-1 font-semibold group-hover:text-primary-500 transition-colors duration-300">
                  {choose}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stars background effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2">
          <img src={stars} className="w-full opacity-50" width={950} height={400} alt="Stars" />
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
