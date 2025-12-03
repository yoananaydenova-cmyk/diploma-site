import React from 'react';

const Home = ({
  name = "Yoana Naydenova",
  role = "Teacher",
  title = "PORTFOLIO",
  ctaText = "WORK WITH ME"
}) => {
  return (
    <div className="min-h-screen bg-[#efefef] text-[#1a1a1a] font-serif selection:bg-gray-300">

      <div className="flex flex-col lg:flex-row min-h-screen w-full max-w-[1920px] mx-auto">
        <div className="w-full lg:w-[45%] p-4 md:p-6 flex flex-col gap-4 md:gap-6 justify-center h-auto lg:h-screen">
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[45%] overflow-hidden shadow-sm">
            <img 
              src="https://images.freeimages.com/images/large-previews/16f/darkbuilding-1541392.jpg?fmt=webp&h=350" 
              alt="Modern Architecture" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
            />
          </div>
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[45%] overflow-hidden shadow-sm">
            <img 
              src="https://images.freeimages.com/images/large-previews/a9e/safranbolu-2-1530341.jpg?fmt=webp&h=350" 
              alt="Architectural Details" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
            />
          </div>
        </div>

        <div className="w-full lg:w-[55%] flex flex-col justify-between p-8 md:p-12 lg:p-16 xl:p-20 relative">
          <div className="mt-4 lg:mt-0">
            <h1 className="font-bodoni text-[15vw] lg:text-[8vw] leading-[0.8] tracking-tight text-black">
              {title}
            </h1>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-20 lg:mt-0 gap-8 md:gap-0">
            <div className="flex flex-col gap-1">
              <h2 className="font-bodoni text-3xl md:text-4xl text-black font-medium">{name}</h2>
              <p className="font-bodoni text-2xl md:text-3xl text-gray-700">{role}</p>
            </div>

            <a href="#" className="group flex flex-col items-start md:items-end">
              <span className="font-sans text-[10px] md:text-xs font-bold tracking-[0.25em] text-[#999999] uppercase pb-1 border-b border-[#cccccc] group-hover:text-black group-hover:border-black transition-colors duration-300">
                {ctaText}
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
