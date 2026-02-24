import { useState } from "react";
import PDFModal from "./PDFModal";

export default function DiplomaComponent() {
  const [open, setOpen] = useState(false);
  const file = `${import.meta.env.BASE_URL}diploma.pdf`;

  return (
    <>
      <div className="flex flex-wrap justify-center gap-5">
        <button
          onClick={() => setOpen(true)}
          className="px-8 py-4 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105"
        >
          👁 Прегледай дипломната работа
        </button>

        <a
          href={file}
          download
          className="px-8 py-4 bg-emerald-600 text-white rounded-xl font-semibold shadow-lg hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105"
        >
          ⬇ Изтегли PDF
        </a>
      </div>

      <PDFModal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Дипломна работа"
        file={file}
      />
    </>
  );
}