import { Button, Card } from "flowbite-react";

export default function About() {
  const cvLink = "/CV.pdf"; // сложи своя PDF файл тук
  const profileImage = "https://images.freeimages.com/images/premium/previews/2648/26481754-businesswoman.jpg?fmt=webp&h=350"; // сложи своята снимка

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
        За мен
      </h1>

      {/* About Card */}
      <Card className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 p-6 md:p-10 shadow-lg hover:shadow-2xl transition-shadow duration-300">
        {/* Profile Image */}
        <div className="flex-shrink-0 w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-indigo-500">
          <img
            src={profileImage}
            alt="Моята снимка"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text & CV Button */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Йоана Иванова</h2>
          <p className="text-gray-700 mb-2">
            Аз съм студентка с интереси в областта на ИТ и икономика. Обичам да уча нови технологии
            и да развивам уменията си в програмиране, анализ на данни и дизайн на интерфейси.
          </p>
          <p className="text-gray-700 mb-4">
            Силни страни: бързо усвояване на нови технологии, внимание към детайла, работа в екип. 
            Умения: React, Vite, Tailwind CSS, работа с бази данни, визуализация на данни.
          </p>

          {/* CV Button */}
          <Button
            href={cvLink}
            target="_blank"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium"
          >
            ⬇ Изтегли CV
          </Button>
        </div>
      </Card>

      {/* Professional Interests & Future Plans */}
      <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <h3 className="text-xl font-semibold mb-3 text-gray-900">Професионални интереси</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Уеб разработка (React, Vite, Tailwind CSS)</li>
            <li>Икономически анализ и визуализация на данни</li>
            <li>UI/UX дизайн и създаване на responsive интерфейси</li>
          </ul>
        </Card>

        <Card>
          <h3 className="text-xl font-semibold mb-3 text-gray-900">Бъдещи планове</h3>
          <p className="text-gray-700">
            Планирам да се развивам в областта на фронтенд разработката и анализа на данни.
            Целта ми е да усвоя нови технологии като TypeScript, Next.js и облачни услуги, 
            за да създавам ефективни и мащабируеми приложения.
          </p>
        </Card>
      </div>
    </div>
  );
}
