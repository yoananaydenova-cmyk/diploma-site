import PresentationComponent from "../components/PresentationComponent";
import DiplomaComponent from "../components/DiplomaComponent";

export default function Diploma() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-6 md:px-16">

      <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-20">
        Дипломна работа
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        {/* Presentation Card */}
        <div className="bg-white rounded-3xl shadow-xl p-10 hover:shadow-2xl transition">
          <h2 className="text-2xl font-bold text-indigo-600 mb-4">
            📊 Презентация
          </h2>
          <p className="text-gray-600 mb-8">
            Официалната презентация към дипломната работа.
          </p>
          <PresentationComponent />
        </div>

        {/* Diploma Card */}
        <div className="bg-white rounded-3xl shadow-xl p-10 hover:shadow-2xl transition">
          <h2 className="text-2xl font-bold text-emerald-600 mb-4">
            📘 Пълен текст
          </h2>
          <p className="text-gray-600 mb-8">
            Пълната дипломна работа в PDF формат.
          </p>
          <DiplomaComponent />
        </div>

      </div>
    </div>
  );
}