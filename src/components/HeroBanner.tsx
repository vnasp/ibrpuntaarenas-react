import { Link } from "react-router-dom";
import background1 from "../assets/bg1.webp";
import CrossDecorator from "./CrossDecorator";

export default function HeroBanner() {
  return (
    <section
      className="relative w-full h-[90vh] px-32 flex items-center"
      aria-label="Banner principal"
    >
      {/* Imagen de fondo */}
      <img
        src={background1}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-screen object-cover object-center hero-bg"
      />

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay " />

      <div className="relative z-10 py-28 mt-16">
        <CrossDecorator text="Centrados en la Palabra de Dios" />
        <h1 className="font-heading text-white text-5xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight drop-shadow-md">
          Iglesia Bautista
          <br />
          Reformada
        </h1>

        {/* Cita */}
        <p className="mt-7 font-serif italic text-white/75 text-lg sm:text-xl max-w-lg">
          “Y aquel Verbo fue hecho carne, y habitó entre nosotros (y vimos su
          gloria, gloria como del unigénito del Padre), lleno de gracia y de
          verdad.”
          <span className="block not-italic font-body text-xs tracking-widest uppercase mt-2 text-white/50">
            — San Juan 1:12
          </span>
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link
            to="/horarios"
            className="px-7 py-3 bg-btn hover:bg-btn-hover text-white text-sm font-medium tracking-wide rounded transition-colors duration-200 text-center"
          >
            Nuestros Horarios
          </Link>
          <Link
            to="/quienes-somos"
            className="px-7 py-3 border btn-outline hover:border-white text-white text-sm font-medium tracking-wide rounded transition-colors duration-200 text-center"
          >
            Conócenos
          </Link>
        </div>
      </div>
      <div className="absolute left-0 bottom-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          className="w-full h-12"
          preserveAspectRatio="none"
        >
          <path
            className="fill-primary"
            d="M0,80L80,90.7C160,101,320,123,480,106.7C640,91,800,37,960,26.7C1120,16,1280,48,1360,64L1440,80L1440,0L0,0Z"
          />
        </svg>
      </div>
    </section>
  );
}
