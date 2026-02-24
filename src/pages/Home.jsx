import { Link } from "react-router-dom";

const Home = ({
  name = "Yoana Naydenova",
  role = "Teacher & Frontend Developer",
  title = "PORTFOLIO",
  ctaText = "WORK WITH ME"
}) => {
  return (
    <div className="min-h-screen bg-[#f5f5f5] text-[#1a1a1a] font-serif selection:bg-gray-300">

      <div className="flex flex-col lg:flex-row min-h-screen w-full max-w-[1920px] mx-auto">

        {/* LEFT SIDE – IMAGES */}
        <div className="w-full lg:w-[45%] p-4 md:p-6 flex flex-col gap-6 justify-center lg:h-screen">
          
          {/* Image 1 */}
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[45%] overflow-hidden rounded-2xl shadow-xl group">
            <img 
              src="https://images.freeimages.com/images/large-previews/16f/darkbuilding-1541392.jpg?fmt=webp&h=350" 
              alt="Modern Architecture" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-500"></div>
          </div>

          {/* Image 2 */}
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[45%] overflow-hidden rounded-2xl shadow-xl group">
            <img 
              src="https://images.freeimages.com/images/large-previews/a9e/safranbolu-2-1530341.jpg?fmt=webp&h=350" 
              alt="Architectural Details" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-500"></div>
          </div>
        </div>

        {/* RIGHT SIDE – TEXT */}
        <div className="w-full lg:w-[55%] flex flex-col justify-between p-8 md:p-12 lg:p-16 xl:p-24">

          {/* Big Title */}
          <div>
            <h1 className="text-[18vw] lg:text-[7vw] leading-[0.8] tracking-tight font-light text-black">
              {title}
            </h1>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">

            {/* Name + Role */}
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black">
                {name}
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 mt-2">
                {role}
              </p>
            </div>

            {/* CTA BUTTON */}
            <Link to="/about">
              <button className="group relative px-10 py-4 bg-black text-white text-sm tracking-[0.25em] uppercase font-semibold overflow-hidden rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                
                <span className="relative z-10">
                  {ctaText}
                </span>

                {/* Hover effect */}
                <span className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
                <span className="absolute inset-0 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                  {ctaText}
                </span>
              </button>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;