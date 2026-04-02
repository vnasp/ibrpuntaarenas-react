import heroBg from "../assets/hero.png";

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
  const bg = imageSrc ?? heroBg;

  return (
    <section
      className="relative w-full h-72 md:h-96 flex items-end overflow-hidden"
      aria-label={title}
    >
      <img
        src={bg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-linear-to-b from-primary/50 via-primary/60 to-primary/90" />

      <div className="relative z-10 px-8 sm:px-16 md:px-24 pb-10 w-full">
        <p className="uppercase tracking-[0.28em] text-xs font-body text-white/60 mb-2">
          {decoratorText}
        </p>
        <h1 className="font-heading text-white text-4xl sm:text-5xl leading-tight drop-shadow-md">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-2 font-serif italic text-white/70 text-base sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
