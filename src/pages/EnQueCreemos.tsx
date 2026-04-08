import { useEffect, useRef, useState } from "react";
import PageBanner from "../components/PageBanner";
import IglesiaTab from "../components/enqueCreemos/IglesiaTab";
import ConfesionTab from "../components/enqueCreemos/ConfesionTab";
import ChicagoTab from "../components/enqueCreemos/ChicagoTab";
import background3 from "../assets/bg3.webp";

type View = "iglesia" | "confesion" | "chicago";

export default function EnQueCreemos() {
  const [view, setView] = useState<View>("iglesia");
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    document
      .getElementById("tabs-anchor")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [view]);

  return (
    <>
      <PageBanner
        decoratorText="Lo que creemos"
        title="En Qué Creemos"
        subtitle="Creemos que la Biblia es la única autoridad suficiente, segura e infalible."
        imageSrc={background3}
      />

      <section className="bg-bg py-12 px-8 sm:px-16 md:px-32">
        <div className="max-w-5xl lg:max-w-7xl mx-auto">
          {/* Navegación de vistas */}
          <div
            id="tabs-anchor"
            className="flex flex-wrap gap-2 mb-10 border-b border-border pb-4"
          >
            <ViewTab
              active={view === "iglesia"}
              onClick={() => setView("iglesia")}
            >
              Lo que creemos
            </ViewTab>
            <ViewTab
              active={view === "confesion"}
              onClick={() => setView("confesion")}
            >
              Confesión Bautista
            </ViewTab>
            <ViewTab
              active={view === "chicago"}
              onClick={() => setView("chicago")}
            >
              Declaración de Chicago
            </ViewTab>
          </div>

          {view === "iglesia" && <IglesiaTab onNavigate={setView} />}
          {view === "confesion" && <ConfesionTab />}
          {view === "chicago" && <ChicagoTab />}
        </div>
      </section>
    </>
  );
}

function ViewTab({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-sm font-body cursor-pointer rounded-sm transition-colors ${
        active
          ? "bg-primary text-white"
          : "text-text-muted hover:bg-primary/10 hover:text-text"
      }`}
    >
      {children}
    </button>
  );
}
