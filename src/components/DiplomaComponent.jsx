import { useState, useEffect, useRef } from "react";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

export default function DiplomaComponent() {
  const [showViewer, setShowViewer] = useState(false);
  const [containerHeight, setContainerHeight] = useState(850);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const sectionRef = useRef(null);

  const docs = [
    {
      uri: `${import.meta.env.BASE_URL}diploma.pdf`,
      fileType: "pdf",
      fileName: "diploma.pdf",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
        setContainerHeight(window.innerHeight * 0.8);
      } else {
        setIsMobile(false);
        setContainerHeight(900);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto scroll when opening
  useEffect(() => {
    if (showViewer && sectionRef.current) {
      setTimeout(() => {
        sectionRef.current.scrollIntoView({ behavior: "smooth" });
      }, 200);
    }
  }, [showViewer]);

  const getZoom = () => {
    if (!isMobile || !containerRef.current) return 1;
    return containerRef.current.offsetWidth / 595;
  };

  return (
    <div ref={sectionRef} className="text-center">
      {/* BUTTONS */}
      <div className="flex flex-wrap justify-center gap-5 mb-8">
        <button
          onClick={() => setShowViewer((prev) => !prev)}
          className={`px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg transition-all duration-300 transform hover:scale-105 ${
            showViewer
              ? "bg-red-600 text-white hover:bg-red-700"
              : "bg-indigo-600 text-white hover:bg-indigo-700"
          }`}
        >
          {showViewer ? "✖ Затвори документа" : "👁 Прегледай дипломната работа"}
        </button>

        <a
          href={docs[0].uri}
          download
          className="px-8 py-4 bg-emerald-600 text-white rounded-2xl font-semibold text-lg shadow-lg hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105"
        >
          ⬇ Изтегли PDF
        </a>
      </div>

      {/* VIEWER */}
      <div
        className={`transition-all duration-500 ease-in-out ${
          showViewer
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none h-0 overflow-hidden"
        }`}
      >
        {showViewer && (
          <div
            ref={containerRef}
            className="rounded-3xl border border-gray-300 overflow-y-auto shadow-2xl bg-white"
            style={{ height: containerHeight }}
          >
            <DocViewer
              documents={docs}
              pluginRenderers={DocViewerRenderers}
              config={{
                pdfVerticalScrollByDefault: isMobile,
                pdfZoom: { defaultZoom: getZoom() },
                header: { disableHeader: false },
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}