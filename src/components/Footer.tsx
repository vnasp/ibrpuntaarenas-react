import logoBlanco from "../assets/logo_horizontal_blanco.png";

const navLinks = [
  { label: "Quiénes Somos", href: "#quienes-somos" },
  { label: "En qué creemos", href: "#en-que-creemos" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-deep text-white">
      {/* Cuerpo del footer */}
      <div className="max-w-6xl mx-auto px-8 sm:px-16 py-14 grid sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Columna: Logo + descripción */}
        <div className="md:col-span-1">
          <img
            src={logoBlanco}
            alt="IBR Punta Arenas"
            className="h-10 w-auto object-contain mb-4"
          />
          <p className="font-body text-white/60 text-sm leading-relaxed max-w-xs">
            Iglesia Bautista Reformada de Punta Arenas. Creciendo juntos para la
            gloria de Dios desde hace más de 60 años.
          </p>
        </div>

        {/* Columna: Navegación */}
        <div>
          <h3 className="font-heading text-sm uppercase tracking-widest text-white/50 mb-4">
            Navegación
          </h3>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-body text-sm text-white/70 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Columna: Horarios */}
        <div>
          <h3 className="font-heading text-sm uppercase tracking-widest text-white/50 mb-4">
            Horarios
          </h3>
          <ul className="space-y-4 font-body text-sm text-white/70">
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
          <h3 className="font-heading text-sm uppercase tracking-widest text-white/50 mb-4">
            Contacto
          </h3>
          <ul className="space-y-4 font-body text-sm text-white/70">
            <li>
              Ignacio Carrera Pinto 852, Local B
              <br />
              Punta Arenas, Chile
            </li>
            <li>
              <a
                href="mailto:ibrpuntaarenas@gmail.com"
                className="hover:text-white transition-colors duration-200"
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
          <span>© {year} IBR Punta Arenas. Todos los derechos reservados.</span>
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
  );
}
