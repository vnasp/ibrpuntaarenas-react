interface Props {
  text: string;
  mobileText?: string;
}

/**
 * Decorador de cruz: línea vertical que se cruza con línea horizontal,
 * rombo en la intersección. El texto se superpone sobre la línea horizontal.
 */
export default function CrossDecorator({ text, mobileText }: Props) {
  return (
    <div className="relative mb-6 overflow-x-hidden">
      <div aria-hidden="true">
        <svg
          width="100%"
          height="60"
          viewBox="0 0 600 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-accent"
        >
          <line
            x1="0"
            y1="30"
            x2="420"
            y2="30"
            stroke="currentColor"
            strokeWidth="1"
          />
          <line
            x1="18"
            y1="10"
            x2="18"
            y2="80"
            stroke="currentColor"
            strokeWidth="1"
          />
          <polygon points="18,24 24,30 18,36 12,30" fill="currentColor" />
        </svg>
      </div>

      {/* Texto sobre la línea horizontal */}
      <p className="absolute top-1 left-9 uppercase tracking-[0.28em] text-xs font-body text-white/70">
        {mobileText ? (
          <>
            <span className="sm:hidden">{mobileText}</span>
            <span className="hidden sm:inline">{text}</span>
          </>
        ) : (
          text
        )}
      </p>
    </div>
  );
}
