interface Props {
  text: string;
}

/**
 * Decorador de línea: línea horizontal con rombo en cada extremo.
 * El texto se superpone centrado sobre la línea.
 */
export default function LineDecorator({ text }: Props) {
  return (
    <div className="relative flex justify-center mb-8">
      <div aria-hidden="true">
        <svg
          width="320"
          height="24"
          viewBox="0 0 260 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-accent w-full max-w-xs sm:max-w-sm"
        >
          <polygon points="8,6 14,12 8,18 2,12" fill="currentColor" />
          <line
            x1="14"
            y1="12"
            x2="260"
            y2="12"
            stroke="currentColor"
            strokeWidth="1"
          />
          <polygon points="260,6 266,12 260,18 254,12" fill="currentColor" />
        </svg>
      </div>

      {/* Texto centrado sobre la línea horizontal */}
      <p className="absolute inset-0 -top-10 flex items-center justify-center uppercase tracking-[0.3em] text-xs font-body text-white/70">
        {text}
      </p>
    </div>
  );
}
