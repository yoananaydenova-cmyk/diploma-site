import { useEffect } from "react";

export default function PDFModal({ isOpen, onClose, title, file }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4 animate-fadeIn">
      <div className="bg-white w-full max-w-6xl h-[90vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col">

        {/* HEADER */}
        <div className="flex justify-between items-center p-6 border-b">
          <h3 className="text-xl font-semibold text-gray-800">
            {title}
          </h3>

          <button
            onClick={onClose}
            className="text-red-600 font-bold text-lg hover:scale-110 transition"
          >
            ✖
          </button>
        </div>

        {/* PDF */}
        <iframe
          src={file}
          title={title}
          className="flex-1 w-full"
        />

        {/* FOOTER */}
        <div className="p-4 border-t flex justify-end">
          <a
            href={file}
            download
            className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition"
          >
            ⬇ Изтегли PDF
          </a>
        </div>
      </div>
    </div>
  );
}