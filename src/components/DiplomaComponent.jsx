import { useState, useEffect, useRef } from "react";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import "@cyntler/react-doc-viewer/dist/index.css";

export default function DiplomaComponent() {
  const [showViewer, setShowViewer] = useState(false);
  const [containerHeight, setContainerHeight] = useState(800); // по-голяма височина за А4
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  const docs = [
    {
      uri: "/diploma.pdf",
      fileType: "pdf",
      fileName: "diploma.pdf",
    },
  ];

  // Автоматично задаване на височина и детекция на мобилни
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
        setContainerHeight(window.innerHeight * 0.7);
      } else {
        setIsMobile(false);
        setContainerHeight(800); // подходяща височина за А4
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fit-to-width zoom за мобилни
  const getZoom = () => {
    if (!isMobile || !containerRef.current) return 1.0;
    const containerWidth = containerRef.current.offsetWidth;
    return containerWidth / 595; // стандартна ширина на A4 в точки ~595
  };

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4 text-center">ДИПЛОМНА РАБОТА</h2>

      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-xl p-4 text-center">
        {/* Бутоните винаги видими */}
        <div className="flex justify-center gap-4 mb-4">
          <button
            onClick={() => setShowViewer((prev) => !prev)}
            className={`px-6 py-3 font-medium rounded ${
              showViewer
                ? "bg-red-500 text-white hover:bg-red-600"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            {showViewer ? "✖ Затвори дипломна работа" : "👁 Виж дипломна работа"}
          </button>

          <a
            href={docs[0].uri}
            download={docs[0].fileName}
            className="px-6 py-3 bg-green-600 text-white font-medium rounded hover:bg-green-700"
          >
            ⬇ Изтегли дипломна работа
          </a>
        </div>

        {showViewer && (
          <div
            ref={containerRef}
            className="overflow-y-scroll rounded-lg border"
            style={{ height: containerHeight }}
          >
            <DocViewer
              documents={docs}
              pluginRenderers={DocViewerRenderers}
              theme={{
                primary: "#5296d8",
                secondary: "#ffffff",
                tertiary: "#5296d899",
                textPrimary: "#ffffff",
                textSecondary: "#5296d8",
                textTertiary: "#00000099",
                disableThemeScrollbar: false,
              }}
              config={{
                pdfVerticalScrollByDefault: isMobile,
                pdfZoom: { defaultZoom: getZoom() },
                header: { disableHeader: false },
              }}
            />
          </div>
        )}
      </div>
    </section>
  );
}
