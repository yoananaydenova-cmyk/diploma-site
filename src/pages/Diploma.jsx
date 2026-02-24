import PresentationComponent from "../components/PresentationComponent";
import DiplomaComponent from "../components/DiplomaComponent";

export default function Diploma() {
  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4 md:px-12">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-20">
        ДИПЛОМНА РАБОТА
      </h1>

      {/* Презентация */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="bg-white shadow-xl rounded-3xl overflow-hidden border border-gray-200">
          <div className="bg-gradient-to-r from-indigo-600 to-indigo-500 p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-2">
              ПРЕЗЕНТАЦИЯ
            </h2>
            <p className="text-indigo-100">
              Вижте официалната презентация на дипломната работа.
            </p>
          </div>

          <div className="p-8">
            <PresentationComponent />
          </div>
        </div>
      </section>

      {/* Дипломна работа */}
      <section className="max-w-6xl mx-auto">
        <div className="bg-white shadow-xl rounded-3xl overflow-hidden border border-gray-200">
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-2">
              ДИПЛОМНА РАБОТА
            </h2>
            <p className="text-emerald-100">
              Пълен текст на дипломната работа в PDF формат.
            </p>
          </div>

          <div className="p-8">
            <DiplomaComponent />
          </div>
        </div>
      </section>
    </div>
  );
}