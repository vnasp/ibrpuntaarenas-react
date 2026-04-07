import { Link } from "react-router-dom";
import logoBlanco from "../assets/logo_horizontal_blanco.png";

const navLinks = [
  { label: "Quiénes Somos", to: "/quienes-somos" },
  { label: "En qué creemos", to: "/en-que-creemos" },
  { label: "Horarios", to: "/horarios" },
  { label: "Contacto", to: "/contacto" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="relative bg-primary-deep">
      <div className="absolute left-0 -top-10 w-full overflow-hidden leading-none rotate-180">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          className="w-full h-12"
          preserveAspectRatio="none"
        >
          <path
            className="fill-primary-deep"
            d="M0,80L80,90.7C160,101,320,123,480,106.7C640,91,800,37,960,26.7C1120,16,1280,48,1360,64L1440,80L1440,0L0,0Z"
          />
        </svg>
      </div>
      <footer className="bg-primary-deep text-white">
        {/* Cuerpo del footer */}
        <div className="max-w-6xl mx-auto px-8 sm:px-16 py-14 grid sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Columna: Logo + descripción */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img
              src={logoBlanco}
              alt="IBR Punta Arenas"
              width={4961}
              height={1654}
              className="h-20 w-auto object-contain mb-4"
            />
            <p className="font-body text-white/60 text-xs leading-relaxed max-w-xs mx-auto md:mx-0">
              Iglesia Bautista Reformada en Punta Arenas, centrada en la Palabra
              de Dios y el evangelio de Jesucristo.
            </p>
          </div>

          {/* Columna: Navegación */}
          <div>
            <h3 className="font-heading text-xs uppercase tracking-widest text-white/50 mb-4">
              Navegación
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-body text-xs text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna: Horarios */}
          <div>
            <h3 className="font-heading text-xs uppercase tracking-widest text-white/50 mb-4">
              Horarios
            </h3>
            <ul className="space-y-4 font-body text-xs text-white/70">
              <li>
                <span className="block text-white/90 font-medium">
                  Domingo 11:30
                </span>
                <span className="text-white/50">Culto Día del Señor</span>
              </li>
              <li>
                <span className="block text-white/90 font-medium">
                  Viernes 19:30
                </span>
                <span className="text-white/50">Reunión de Oración</span>
              </li>
            </ul>
          </div>

          {/* Columna: Contacto */}
          <div>
            <h3 className="font-heading text-xs uppercase tracking-widest text-white/50 mb-4">
              Contacto
            </h3>
            <ul className="space-y-4 font-body text-xs text-white/70">
              <li>
                Ignacio Carrera Pinto 852, Local B
                <br />
                Punta Arenas, Chile
              </li>
              <li>
                <a
                  href="mailto:ibrpuntaarenas@gmail.com"
                  className="hover:text-white transition-colors duration-200 break-all text-[10px]"
                >
                  ibrpuntaarenas@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="border-t border-white/10">
          <div className="max-w-6xl mx-auto px-8 sm:px-16 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40 font-body">
            <span>
              © {year} IBR Punta Arenas. Todos los derechos reservados.
            </span>
            <span>
              Diseñado por{" "}
              <a
                href="https://linkedin.com/in/vnasp"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/70 underline underline-offset-2 transition-colors duration-200"
              >
                VM
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
