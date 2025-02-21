import { companyLogos } from "../constants";
import {service1,check } from "../assets";

const CompanyLogos = ({ className }) => {
  const industries = [
    "IT & Software Development",
    "Healthcare & Pharmaceuticals",
    "Finance & Banking",
    "Marketing & Sales",
    "Manufacturing & Logistics",
  ];
  return (
    <div className={className}>
              
              <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Smartest AI"
                height={730}
                src={service1}
              />
            </div>



            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">Overview</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                AI RecruiterX changes the game by leveraging Artificial Intelligence to screen, rank, and manage candidates efficiently.
                Whether you're a startup, staffing agency, or an enterprise, our AI-driven ATS helps you hire smarter, faster, and better.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-n-1/10 hover:border-n-1/20 transition-colors">
                  <img width={24} height={24} src={check} alt="check" className="flex-shrink-0" />
                  <p className="ml-4 body-2">Sync with multiple platform</p>
                </div>

                <div className="flex items-center p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-n-1/10 hover:border-n-1/20 transition-colors">
                  <img width={24} height={24} src={check} alt="check" className="flex-shrink-0" />
                  <p className="ml-4 body-2">Automated interview screen</p>
                </div>

                <div className="flex items-center p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-n-1/10 hover:border-n-1/20 transition-colors">
                  <img width={24} height={24} src={check} alt="check" className="flex-shrink-0" />
                  <p className="ml-4 body-2">Candidate sentimental</p>
                </div>

                <div className="flex items-center p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-n-1/10 hover:border-n-1/20 transition-colors">
                  <img width={24} height={24} src={check} alt="check" className="flex-shrink-0" />
                  <p className="ml-4 body-2">Culture fit analysis</p>
                </div>
              </div>
            </div>

            
            </div>

            
    <center><h3 className="h2 mb-8 md:mb-10">Industries We Serve</h3></center>  
<div className="flex justify-center mb-10">
  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl">
    {industries.map((industry, index) => (
      <div 
        key={index} 
        className="flex items-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-n-1/10 hover:border-n-1/20 transition-colors"
      >
        <img src={check} width={24} height={24} alt="check" className="mr-3 flex-shrink-0" />
        <p className="body-2 text-n-3">{industry}</p>
      </div>
    ))}
  </div>
</div>
      
      <ul className="flex flex-wrap justify-center gap-8">
        {companyLogos.map((logo, index) => (
          <li
            className="flex items-center justify-center flex-1 h-[11rem] min-w-[200px]"
            key={index}
          >
            <img 
              src={logo} 
              width={200} 
              height={42} 
              alt={logo} 
              className="hover:scale-125 transform transition-all duration-300 ease-in-out hover:brightness-125 filter grayscale hover:grayscale-0"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
