import  { useState } from "react";
import { Card, Button, Modal } from "flowbite-react";

export default function Projects() {
  const projectData = [
    {
      name: "Презентации",
      description: "Изготвяне на професионални презентации за академични и бизнес цели.",
      image: "https://st2.depositphotos.com/3889193/8014/i/450/depositphotos_80147336-Business-teamwork.jpg",
      details: "Тук можете да видите всички презентации, които съм изготвила, включително академични, маркетингови и проектни презентации."
    },
    {
      name: "Маркетингови анализи",
      description: "Подробни анализи за пазари, конкуренция и потребителско поведение.",
      image: "https://images.openai.com/static-rsc-1/IG9gNFZAY7zyr1pVoDPnEXs13RdPvq0GxVOh6UcTeT5mtyvpailP5KkEG6pU4hHpxBFJNLB2zl8wBpqDmUg0J0XCNgi7ujhJNop1wQiB9gHSyKAE26MTxgO1WUTsJdPp01dvYkNRvxz4LcCNhh1_Ow",
      details: "Включва SWOT анализи, конкурентни проучвания и пазарни стратегии."
    },
    {
      name: "Финансови казуси",
      description: "Симулации и решения на финансови казуси с аналитичен подход.",
      image: "https://plus.unsplash.com/premium_photo-1681487767138-ddf2d67b35c1?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmluYW5jaWFsJTIwY2hhcnR8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
      details: "Примери от учебни казуси, анализи на бюджети и прогнози."
    },
    {
      name: "Доклади",
      description: "Подготовка на академични и професионални доклади.",
      image: "https://st2.depositphotos.com/3889193/8014/i/450/depositphotos_80147336-Business-teamwork.jpg",
      details: "Включва структурирани доклади с графики и визуализации."
    },
    {
      name: "Уебпроекти",
      description: "Разработка на малки уеб приложения и сайтове.",
      image: "https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
      details: "React, Vite, Tailwind CSS - примерни приложения и уеб сайтове."
    },
    {
      name: "Клубни инициативи",
      description: "Работа по проекти и инициативи в училищни и студентски клубове.",
      image: "https://media.sciencephoto.com/f0/20/17/11/f0201711-800px-wm.jpg",
      details: "Организиране на събития, сътрудничество и създаване на материали."
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
        Проекти
      </h1>

      {/* Grid с проекти */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <Card
            key={index}
            className="hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl cursor-pointer"
          >
            <img
              src={project.image}
              alt={project.name}
              className="rounded-t-lg w-full h-40 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-gray-900">{project.name}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <Button
              onClick={() => setSelectedProject(project)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white"
            >
              Виж повече
            </Button>
          </Card>
        ))}
      </div>

      {/* Modal за подробности */}
      {selectedProject && (
        <Modal show={true} onClose={() => setSelectedProject(null)}>
          <Modal.Header>{selectedProject.name}</Modal.Header>
          <Modal.Body>
            <div className="space-y-4">
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="w-full h-64 object-cover rounded-lg"
              />
              <p className="text-gray-700">{selectedProject.details}</p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setSelectedProject(null)}>Затвори</Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
}
