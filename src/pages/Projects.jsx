import { useState } from "react";
import { Card, Button } from "flowbite-react";
import projectData from "../data/projects";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12 relative z-0">
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
              onClick={() => openModal(project)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold w-full"
            >
              Виж повече
            </Button>
          </Card>
        ))}
      </div>

      {/* Модал */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white rounded-xl max-w-3xl w-full shadow-xl overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-2xl font-bold">{selectedProject.name}</h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ×
              </button>
            </div>
            <div className="p-6 space-y-4">
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="w-full h-64 object-cover rounded-lg"
              />
              <p className="text-gray-700">{selectedProject.details}</p>
            </div>
            <div className="p-4 border-t text-right">
              <button
                onClick={closeModal}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                Затвори
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}