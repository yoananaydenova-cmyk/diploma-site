import PresentationComponent from "../components/PresentationComponent";
import DiplomaComponent from "../components/DiplomaComponent";

export default function Diploma() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-12">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-16">
        ДИПЛОМНА РАБОТА
      </h1>

      {/* Презентация */}
      <section className="max-w-6xl mx-auto mb-12">
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200">
          <div className="bg-gradient-to-r from-indigo-600 to-indigo-500 p-6 text-center">
            <h2 className="text-3xl font-semibold text-white mb-2">
              ПРЕЗЕНТАЦИЯ
            </h2>
            <p className="text-indigo-100">
              Вижте презентацията на вашата дипломна работа.
            </p>
          </div>
          <div className="p-6">
            <PresentationComponent />
          </div>
        </div>
      </section>

      {/* Дипломна работа */}
      <section className="max-w-6xl mx-auto mb-12">
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200">
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 p-6 text-center">
            <h2 className="text-3xl font-semibold text-white mb-2">
              ДИПЛОМНА РАБОТА
            </h2>
            <p className="text-emerald-100">
              Вижте и свалете вашата дипломна работа.
            </p>
          </div>
          <div className="p-6">
            <DiplomaComponent />
          </div>
        </div>
      </section>
    </div>
  );
}
