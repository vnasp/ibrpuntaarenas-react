interface Props {
  decoratorText: string;
  title: string;
  subtitle?: string;
  imageSrc?: string;
}

export default function PageBanner({
  decoratorText,
  title,
  subtitle,
  imageSrc,
}: Props) {
  return (
    <section
      className="relative w-full h-136 flex items-end overflow-hidden"
      aria-label={title}
    >
      <img
        src={imageSrc}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-linear-to-b from-primary/50 via-primary/60 to-primary/90" />

      <div className="relative z-10 px-8 sm:px-16 md:px-24 pb-40 w-full">
        <p className="uppercase tracking-[0.28em] text-xs font-body text-white/60 mb-2">
          {decoratorText}
        </p>
        <h1 className="font-heading text-white text-4xl sm:text-5xl leading-tight drop-shadow-md">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-2 font-serif italic text-white/80 text-base sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>

      {/* Onda inferior */}
      <div className="absolute left-0 bottom-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          className="w-full h-12"
          preserveAspectRatio="none"
        >
          <path
            className="fill-bg"
            d="M0,80L80,90.7C160,101,320,123,480,106.7C640,91,800,37,960,26.7C1120,16,1280,48,1360,64L1440,80L1440,0L0,0Z"
          />
        </svg>
      </div>
    </section>
  );
}
