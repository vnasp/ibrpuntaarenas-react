interface Props {
  text: string;
}

/**
 * Decorador de línea: línea horizontal con rombo en cada extremo.
 * El texto se superpone centrado sobre la línea.
 */
export default function LineDecorator({ text }: Props) {
  return (
    <div className="relative flex flex-col items-center justify-center mb-8">
      {/* Texto centrado sobre la línea horizontal */}
      <p className="-top-10 flex items-center whitespace-nowrap uppercase tracking-[0.3em] text-xs font-body text-white/70">
        {text}
      </p>
      <div aria-hidden="true">
        <svg
          width="320"
          height="24"
          viewBox="0 0 312 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-accent w-full max-w-xs sm:max-w-sm"
        >
          <polygon points="8,6 14,12 8,18 2,12" fill="currentColor" />
          <line
            x1="14"
            y1="12"
            x2="300"
            y2="12"
            stroke="currentColor"
            strokeWidth="1"
          />
          <polygon points="300,6 306,12 300,18 294,12" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}
