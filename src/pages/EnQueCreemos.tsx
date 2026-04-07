import { useState } from "react";
import { confessionChapters } from "../data/confession";
import PageBanner from "../components/PageBanner";
import background3 from "../assets/bg3.webp";

type View = "iglesia" | "confesion" | "chicago";

export default function EnQueCreemos() {
  const [view, setView] = useState<View>("iglesia");
  const [activeIndex, setActiveIndex] = useState(0);
  const active = confessionChapters[activeIndex];

  return (
    <>
      <PageBanner
        decoratorText="Lo que creemos"
        title="En Qué Creemos"
        subtitle="Nuestra fe descansa en la Palabra de Dios y se expresa en documentos confesionales probados por la historia"
        imageSrc={background3}
      />

      <section className="bg-bg py-12 px-8 sm:px-16 md:px-32">
        <div className="max-w-5xl lg:max-w-7xl mx-auto">
          {/* Navegación de vistas */}
          <div className="flex flex-wrap gap-2 mb-10 border-b border-border pb-4">
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
              Confesión Bautista de Londres 1689
            </ViewTab>
            <ViewTab
              active={view === "chicago"}
              onClick={() => setView("chicago")}
            >
              Declaración de Chicago
            </ViewTab>
          </div>

          {/* Vista: texto de la iglesia */}
          {view === "iglesia" && (
            <article className="max-w-3xl pb-20">
              <p className="uppercase tracking-[0.28em] text-xs font-body mb-3">
                Lo que creemos
              </p>
              <h2 className="font-heading text-text text-3xl sm:text-4xl leading-tight mb-4">
                Nuestra fe
              </h2>
              <div className="w-10 h-px bg-accent mb-10" />
              <div className="space-y-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                rem corrupti sint sunt qui vero dolorum, natus voluptate totam!
                Modi odit consectetur autem enim dignissimos hic illum
                reiciendis beatae. Necessitatibus.
              </div>
            </article>
          )}

          {/* Vista: Confesión Bautista 1689 */}
          {view === "confesion" && (
            <>
              {/* Mobile: select dropdown */}
              <div className="md:hidden mb-6">
                <label
                  htmlFor="chapter-select"
                  className="block text-xs uppercase tracking-widest mb-2 font-body"
                >
                  Capítulo
                </label>
                <select
                  id="chapter-select"
                  value={activeIndex}
                  onChange={(e) => setActiveIndex(Number(e.target.value))}
                  className="w-full border border-border rounded-sm px-3 py-2 bg-white text-text font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {confessionChapters.map((ch, i) => (
                    <option key={ch.number} value={i}>
                      {ch.number === 0 ? ch.title : `${ch.number}. ${ch.title}`}
                    </option>
                  ))}
                </select>
              </div>

              {/* Desktop: sidebar + content */}
              <div className="hidden md:flex gap-8 items-start">
                <aside className="w-72 shrink-0 sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2">
                  <p className="uppercase tracking-[0.28em] text-xs font-body mb-4">
                    Capítulos
                  </p>
                  <ul className="space-y-1">
                    {confessionChapters.map((ch, i) => (
                      <li key={ch.number}>
                        <button
                          onClick={() => setActiveIndex(i)}
                          className={`w-full text-left px-3 py-2 rounded-sm text-sm font-body transition-colors ${
                            activeIndex === i
                              ? "bg-primary text-white"
                              : "text-text-muted hover:bg-primary/10 hover:text-text"
                          }`}
                        >
                          {ch.number === 0
                            ? ch.title
                            : `${ch.number}. ${ch.title}`}
                        </button>
                      </li>
                    ))}
                  </ul>
                </aside>

                <article className="flex-1 min-w-0 pb-20">
                  <ChapterContent chapter={active} />
                </article>
              </div>

              {/* Mobile content */}
              <div className="md:hidden">
                <ChapterContent chapter={active} />
              </div>
            </>
          )}

          {/* Vista: Declaración de Chicago */}
          {view === "chicago" && (
            <article className="max-w-3xl pb-20">
              <p className="uppercase tracking-[0.28em] text-xs font-body mb-3">
                Declaración de Chicago sobre la Inerrancia Bíblica
              </p>
              <h2 className="font-heading text-text text-3xl sm:text-4xl leading-tight mb-4">
                Declaración de Chicago
              </h2>
              <div className="w-10 h-px bg-accent mb-10" />
              <p className="font-body text-base leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </article>
          )}
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

function ChapterContent({
  chapter,
}: {
  chapter: (typeof confessionChapters)[0];
}) {
  return (
    <div>
      <p className="uppercase tracking-[0.28em] text-xs font-body mb-3">
        {chapter.number === 0 ? "Introducción" : `Capítulo ${chapter.number}`}
      </p>
      <h2 className="font-heading text-text text-3xl sm:text-4xl leading-tight mb-4">
        {chapter.title}
      </h2>
      <div className="w-10 h-px bg-accent mb-8" />
      <div className="font-body text-base leading-relaxed space-y-4 whitespace-pre-line">
        {chapter.content}
      </div>
    </div>
  );
}
