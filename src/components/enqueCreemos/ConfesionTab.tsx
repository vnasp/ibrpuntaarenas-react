import { useState } from "react";
import { confessionChapters } from "../../data/confession";
import background3 from "../../assets/bg3.webp";

function ChapterContent({
  chapter,
}: {
  chapter: (typeof confessionChapters)[0];
}) {
  const paragraphs = chapter.content.split("\n\n");

  return (
    <div>
      <p className="uppercase tracking-[0.28em] text-xs font-body mb-3">
        {chapter.number === 0
          ? "Confesión Bautista de Fe de 1689"
          : `Capítulo ${chapter.number}`}
      </p>
      <h2 className="font-heading text-text text-3xl sm:text-4xl leading-tight mb-4">
        {chapter.title}
      </h2>
      <div className="w-10 h-px bg-accent mb-8" />
      <div className="font-body text-base leading-relaxed space-y-4">
        {paragraphs.map((block, i) => {
          const lines = block.split("\n");
          const isBulletBlock = lines.every((l) => l.startsWith("•"));

          if (isBulletBlock) {
            return (
              <ul key={i} className="space-y-2">
                {lines.map((line, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    <span>{line.replace(/^•\s*/, "")}</span>
                  </li>
                ))}
              </ul>
            );
          }

          return <p key={i}>{block}</p>;
        })}
      </div>
    </div>
  );
}

export default function ConfecionTab() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = confessionChapters[activeIndex];

  return (
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
                  {ch.number === 0 ? ch.title : `${ch.number}. ${ch.title}`}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <article className="flex-1 min-w-0 pb-20">
          <ChapterContent chapter={active} />
          {active.number === 0 && (
            <div className="relative mt-14 max-w-sm">
              <img
                src={background3}
                alt=""
                aria-hidden="true"
                className="w-full h-56 object-cover object-center rounded-sm"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-3 -right-3 w-full h-full border-2 border-accent rounded-sm -z-10"
              />
            </div>
          )}
        </article>
      </div>

      {/* Mobile content */}
      <div className="md:hidden">
        <ChapterContent chapter={active} />
      </div>
    </>
  );
}
