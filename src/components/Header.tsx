import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logoHorizontalBlanco from "../assets/logo_horizontal_blanco.png";

const navLeft = [
  { label: "Quiénes Somos", to: "/quienes-somos" },
  { label: "En qué creemos", to: "/en-que-creemos" },
];

const navRight = [
  { label: "Horarios", to: "/horarios" },
  { label: "Contacto", to: "/contacto" },
];

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `text-sm tracking-widest uppercase transition-colors duration-200 ${
    isActive
      ? "text-white font-bold"
      : "text-white/80 hover:text-white hover:font-bold"
  }`;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <header className={isHome ? "header" : "header-solid"}>
      <div className="w-full px-8 md:px-16 lg:px-32 mx-auto h-28 flex items-center justify-between">
        {/* Nav izquierda — oculta en móvil */}
        <nav className="hidden md:flex items-center gap-16 flex-1">
          {navLeft.map((item) => (
            <NavLink key={item.to} to={item.to} className={navLinkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Logo centrado */}
        <NavLink
          to="/"
          className="flex items-center mx-auto md:mx-0 select-none"
          aria-label="Inicio"
        >
          <img
            src={logoHorizontalBlanco}
            alt="IBR Punta Arenas"
            className="h-24 w-auto object-contain logo"
          />
        </NavLink>

        {/* Nav derecha — oculta en móvil */}
        <nav className="hidden md:flex items-center gap-16 flex-1 justify-end">
          {navRight.map((item) => (
            <NavLink key={item.to} to={item.to} className={navLinkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Botón hamburguesa — solo en móvil */}
        <button
          className="md:hidden ml-auto text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-white/40"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Menú móvil desplegable */}
      {menuOpen && (
        <nav className="md:hidden bg-primary-deep border-t border-white/10 px-4 pb-4">
          <ul className="flex flex-col gap-1 mt-2">
            {[...navLeft, ...navRight].map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded text-sm font-medium tracking-wide transition-colors duration-200 ${
                      isActive
                        ? "text-white bg-white/20"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
