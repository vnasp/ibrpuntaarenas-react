import { Fragment, useState } from "react";
import {
  confessionChapters,
  type ConfessionChapter,
} from "../../data/confession/index";

// Renders text with [1], [2]... as superscript footnote markers
function withMarkers(text: string) {
  return text.split(/(\[\d+\])/).map((part, i) => {
    const match = part.match(/^\[(\d+)\]$/);
    if (match) {
      return (
        <sup key={i} className="text-accent text-[0.65em] font-bold ml-0.5">
          {match[1]}
        </sup>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}

function Footnotes({ footnotes }: { footnotes: string[] }) {
  return (
    <div className="mt-3 pl-4 border-l border-border/50 space-y-1">
      {footnotes.map((fn, i) => (
        <p key={i} className="text-xs text-text-muted leading-relaxed">
          <sup className="text-accent font-bold mr-1">{i + 1}</sup>
          {fn}
        </p>
      ))}
    </div>
  );
}

const AT_BOOKS: [string, string, string][] = [
  ["Génesis", "2 Crónicas", "Daniel"],
  ["Éxodo", "Esdras", "Oseas"],
  ["Levítico", "Nehemías", "Joel"],
  ["Números", "Ester", "Amós"],
  ["Deuteronomio", "Job", "Abdías"],
  ["Josué", "Salmos", "Jonás"],
  ["Jueces", "Proverbios", "Miqueas"],
  ["Rut", "Eclesiastés", "Nahúm"],
  ["1 Samuel", "Cantar de los Cantares", "Habacuc"],
  ["2 Samuel", "Isaías", "Sofonías"],
  ["1 Reyes", "Jeremías", "Hageo"],
  ["2 Reyes", "Lamentaciones", "Zacarías"],
  ["1 Crónicas", "Ezequiel", "Malaquías"],
];

const NT_BOOKS: [string, string, string][] = [
  ["Mateo", "Efesios", "Hebreos"],
  ["Marcos", "Filipenses", "Santiago"],
  ["Lucas", "Colosenses", "1 Pedro"],
  ["Juan", "1 Tesalonicenses", "2 Pedro"],
  ["Hechos de los Apóstoles", "2 Tesalonicenses", "1 Juan"],
  ["Romanos", "1 Timoteo", "2 Juan"],
  ["1 Corintios", "2 Timoteo", "3 Juan"],
  ["2 Corintios", "Tito", "Judas"],
  ["Gálatas", "Filemón", "Apocalipsis"],
];

function BibleBooksTable() {
  return (
    <div className="my-4 font-body text-sm space-y-6 border border-border/40 rounded-sm p-4 bg-bg/50">
      <div>
        <p className="font-semibold underline mb-3">Antiguo Testamento</p>
        <div className="grid grid-cols-3 gap-x-6 gap-y-1">
          {AT_BOOKS.map(([a, b, c], i) => (
            <Fragment key={i}>
              <span>{a}</span>
              <span>{b}</span>
              <span>{c}</span>
            </Fragment>
          ))}
        </div>
      </div>
      <div>
        <p className="font-semibold underline mb-3">Nuevo Testamento</p>
        <div className="grid grid-cols-3 gap-x-6 gap-y-1">
          {NT_BOOKS.map(([a, b, c], i) => (
            <Fragment key={i}>
              <span>{a}</span>
              <span>{b}</span>
              <span>{c}</span>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

function ChapterContent({ chapter }: { chapter: ConfessionChapter }) {
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
      <div className="font-body text-base leading-relaxed space-y-5">
        {chapter.blocks.length === 0 && (
          <p className="text-text-muted italic">Contenido en preparación.</p>
        )}
        {chapter.blocks.map((block, i) => {
          switch (block.type) {
            case "article":
              return (
                <div key={i}>
                  <p>
                    <span className="font-semibold">
                      {block.number}.{"  "}
                    </span>
                    {withMarkers(block.content)}
                  </p>
                  {block.footnotes && block.footnotes.length > 0 && (
                    <Footnotes footnotes={block.footnotes} />
                  )}
                </div>
              );

            case "paragraph":
              return (
                <div key={i}>
                  <p>{withMarkers(block.content)}</p>
                  {block.footnotes && block.footnotes.length > 0 && (
                    <Footnotes footnotes={block.footnotes} />
                  )}
                </div>
              );

            case "bible-table":
              return <BibleBooksTable key={i} />;

            case "heading":
              return (
                <h3
                  key={i}
                  className="font-heading text-text text-xl mt-6 mb-2"
                >
                  {block.content}
                </h3>
              );

            case "quote":
              return (
                <blockquote
                  key={i}
                  className="border-l-2 border-accent pl-4 my-4 space-y-1"
                >
                  <p className="italic text-text-muted">{block.content}</p>
                  {block.reference && (
                    <cite className="block text-xs uppercase tracking-widest text-accent not-italic">
                      {block.reference}
                    </cite>
                  )}
                </blockquote>
              );

            case "list":
              return (
                <ul key={i} className="space-y-2">
                  {block.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              );
          }
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
        </article>
      </div>

      {/* Mobile content */}
      <div className="md:hidden">
        <ChapterContent chapter={active} />
      </div>
    </>
  );
}
