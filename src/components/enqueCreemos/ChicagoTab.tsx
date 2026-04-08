import { useState } from "react";
import { chicagoSections, type ChicagoSection } from "../../data/chicago";

function SectionContent({ section }: { section: ChicagoSection }) {
  return (
    <div>
      <p className="uppercase tracking-[0.28em] text-xs font-body mb-3">
        Declaración de Chicago sobre la Inerrancia Bíblica
      </p>
      <h2 className="font-heading text-text text-3xl sm:text-4xl leading-tight mb-4">
        {section.title}
      </h2>
      <div className="w-10 h-px bg-accent mb-8" />

      {section.kind === "text" && (
        <div className="space-y-4 font-body text-base leading-relaxed">
          {section.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      )}

      {section.kind === "brief" && (
        <ol className="space-y-6 font-body text-base leading-relaxed list-none">
          {section.points.map((point, i) => (
            <li key={i} className="flex gap-4">
              <span className="font-heading text-accent text-lg shrink-0 w-5">
                {i + 1}.
              </span>
              <p>{point}</p>
            </li>
          ))}
        </ol>
      )}

      {section.kind === "article" && (
        <div className="space-y-6 font-body text-base leading-relaxed">
          <div className="border-l-2 border-primary pl-5">
            <p className="uppercase tracking-widest text-xs text-primary mb-2">
              Afirmamos
            </p>
            <p>{section.affirm}</p>
          </div>
          <div className="border-l-2 border-text-muted pl-5">
            <p className="uppercase tracking-widest text-xs text-text-muted mb-2">
              {section.denyLabel ?? "Negamos"}
            </p>
            <p>{section.deny}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ChicagoTab() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = chicagoSections[activeIndex];

  return (
    <>
      {/* Mobile: select dropdown */}
      <div className="md:hidden mb-6">
        <label
          htmlFor="chicago-select"
          className="block text-xs uppercase tracking-widest mb-2 font-body"
        >
          Sección
        </label>
        <select
          id="chicago-select"
          value={activeIndex}
          onChange={(e) => setActiveIndex(Number(e.target.value))}
          className="w-full border border-border rounded-sm px-3 py-2 bg-white text-text font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        >
          {chicagoSections.map((s, i) => (
            <option key={s.id} value={i}>
              {s.label}
            </option>
          ))}
        </select>
      </div>

      {/* Desktop: sidebar + content */}
      <div className="hidden md:flex gap-8 items-start">
        <aside className="w-72 shrink-0 sticky top-28 max-h-[calc(100vh-12rem)] overflow-y-auto pr-2">
          <p className="uppercase tracking-[0.28em] text-xs font-body mb-4">
            Secciones
          </p>
          <ul className="space-y-1">
            {chicagoSections.map((s, i) => (
              <li key={s.id}>
                <button
                  onClick={() => setActiveIndex(i)}
                  className={`w-full text-left px-3 py-2 rounded-sm text-sm font-body transition-colors ${
                    activeIndex === i
                      ? "bg-primary text-white"
                      : "text-text-muted hover:bg-primary/10 hover:text-text"
                  }`}
                >
                  {s.label}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <article className="flex-1 min-w-0 pb-20">
          <SectionContent section={active} />
        </article>
      </div>

      {/* Mobile content */}
      <div className="md:hidden">
        <SectionContent section={active} />
      </div>
    </>
  );
}
