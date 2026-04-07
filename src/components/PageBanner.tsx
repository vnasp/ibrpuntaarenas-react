import CrossDecorator from "./CrossDecorator";

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
      className="relative w-full h-[60vh] px-32 flex items-center"
      aria-label={title}
    >
      <img
        src={imageSrc}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      <div className="relative z-10 py-28 mt-16">
        <CrossDecorator text={decoratorText} />
        <h1 className="font-heading text-white text-4xl sm:text-5xl leading-[1.05] tracking-tight drop-shadow-md">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-7 font-serif italic text-white/75 text-lg sm:text-xl max-w-lg">
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
