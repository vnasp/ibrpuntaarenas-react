import { useState } from "react";
import { confessionChapters } from "../data/confession";
import PageBanner from "../components/PageBanner";

export default function EnQueCreemos() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = confessionChapters[activeIndex];

  return (
    <>
      <PageBanner
        decoratorText="Confesión de Fe Bautista de Londres 1689"
        title="En Qué Creemos"
        subtitle="Nuestra confesión de fe establece el fundamento de la enseñanza de nuestra iglesia"
      />

      <section className="bg-bg py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          {/* Mobile: select dropdown */}
          <div className="md:hidden mb-6">
            <label
              htmlFor="chapter-select"
              className="block text-xs uppercase tracking-widest text-text-muted mb-2 font-body"
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
            {/* Sidebar */}
            <aside className="w-72 shrink-0 sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2">
              <p className="uppercase tracking-[0.28em] text-xs font-body text-text-muted mb-4">
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

            {/* Content */}
            <article className="flex-1 min-w-0 pb-20">
              <ChapterContent chapter={active} />
            </article>
          </div>

          {/* Mobile content */}
          <div className="md:hidden">
            <ChapterContent chapter={active} />
          </div>
        </div>
      </section>
    </>
  );
}

function ChapterContent({
  chapter,
}: {
  chapter: (typeof confessionChapters)[0];
}) {
  return (
    <div>
      <p className="uppercase tracking-[0.28em] text-xs font-body text-text-muted mb-3">
        {chapter.number === 0 ? "Introducción" : `Capítulo ${chapter.number}`}
      </p>
      <h2 className="font-heading text-text text-3xl sm:text-4xl leading-tight mb-4">
        {chapter.title}
      </h2>
      <div className="w-10 h-px bg-accent mb-8" />
      <div className="font-body text-text-muted text-base leading-relaxed space-y-4 whitespace-pre-line">
        {chapter.content}
      </div>
    </div>
  );
}
