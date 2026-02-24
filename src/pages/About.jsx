import { useState } from "react";
import { Card } from "flowbite-react";

export default function About() {
  const [showCV, setShowCV] = useState(false);

  const cvLink = `${import.meta.env.BASE_URL}CV.pdf`;
  const profileImage =
    "https://images.freeimages.com/images/premium/previews/2648/26481754-businesswoman.jpg?fmt=webp&h=350";

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6 md:p-16">
        
        {/* PAGE TITLE */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-gray-800 tracking-tight">
          За мен
        </h1>

        {/* MAIN PROFILE CARD */}
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
          
          {/* IMAGE */}
          <div className="w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-indigo-600 shadow-xl">
            <img
              src={profileImage}
              alt="Йоана Иванова"
              className="w-full h-full object-cover"
            />
          </div>

          {/* TEXT */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Йоана Иванова
            </h2>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Аз съм студентка с интереси в областта на информационните технологии и икономиката.
              Обичам да уча нови технологии и да развивам уменията си в програмиране,
              анализ на данни и дизайн на потребителски интерфейси.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Силни страни: бързо усвояване на нови технологии, внимание към детайла,
              ефективна работа в екип.  
              Технически умения: React, Vite, Tailwind CSS, работа с бази данни,
              визуализация на данни и responsive дизайн.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button
                onClick={() => setShowCV(true)}
                className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105"
              >
                👁 Прегледай CV
              </button>

              <a
                href={cvLink}
                download
                className="px-8 py-3 bg-emerald-600 text-white font-semibold rounded-xl shadow-lg hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105"
              >
                ⬇ Изтегли CV
              </a>
            </div>
          </div>
        </div>

        {/* PROFESSIONAL SECTION */}
        <div className="max-w-6xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* INTERESTS */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <h3 className="text-2xl font-bold mb-6 text-indigo-600">
              💼 Професионални интереси
            </h3>
            <ul className="space-y-3 text-gray-700 leading-relaxed">
              <li>• Уеб разработка (React, Vite, Tailwind CSS)</li>
              <li>• Икономически анализ и визуализация на данни</li>
              <li>• UI/UX дизайн и създаване на responsive интерфейси</li>
            </ul>
          </div>

          {/* FUTURE PLANS */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
            <h3 className="text-2xl font-bold mb-6 text-emerald-600">
              🚀 Бъдещи планове
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Планирам да се развивам в областта на фронтенд разработката и анализа на данни.
              Целта ми е да усвоя нови технологии като TypeScript, Next.js и облачни услуги,
              за да създавам ефективни и мащабируеми приложения с висока производителност.
            </p>
          </div>
        </div>
      </div>

      {/* ===== MODAL ===== */}
      {showCV && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4 animate-fadeIn">
          
          <div className="bg-white w-full max-w-6xl h-[90vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col">

            {/* HEADER */}
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-xl font-semibold text-gray-800">
                Моето CV
              </h3>

              <button
                onClick={() => setShowCV(false)}
                className="text-red-600 font-bold text-lg hover:scale-110 transition"
              >
                ✖
              </button>
            </div>

            {/* PDF PREVIEW */}
            <iframe
              src={cvLink}
              title="CV Preview"
              className="flex-1 w-full"
            />

            {/* FOOTER */}
            <div className="p-4 border-t flex justify-end">
              <a
                href={cvLink}
                download
                className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition"
              >
                ⬇ Изтегли CV
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}