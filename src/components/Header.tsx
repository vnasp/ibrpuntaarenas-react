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
    <>
      <header className={isHome ? "header" : "header-solid"}>
        {/* Tablet: logo arriba centrado + nav abajo en fila. Desktop (lg): logo centrado entre navs */}
        <div
          className="w-full px-4 md:px-16 lg:px-32 mx-auto flex items-center justify-between lg:h-28
          md:flex-col md:items-center md:h-auto md:py-4 md:gap-6
          lg:flex-row lg:py-0 lg:gap-0"
        >
          {/* Nav izquierda — solo lg */}
          <nav className="hidden lg:flex items-center gap-16 flex-1">
            {navLeft.map((item) => (
              <NavLink key={item.to} to={item.to} className={navLinkClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Logo (mobile: izquierda, md+: centrado) */}
          <NavLink
            to="/"
            className="flex items-center select-none"
            aria-label="Inicio"
          >
            <img
              src={logoHorizontalBlanco}
              alt="IBR Punta Arenas"
              width={4961}
              height={1654}
              className="h-24 w-auto object-contain logo"
            />
          </NavLink>

          {/* Nav derecha — solo lg */}
          <nav className="hidden lg:flex items-center gap-16 flex-1 justify-end">
            {navRight.map((item) => (
              <NavLink key={item.to} to={item.to} className={navLinkClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Nav fila completa — solo md (tablet) */}
          <nav className="hidden md:flex lg:hidden items-center gap-16 justify-center flex-wrap">
            {[...navLeft, ...navRight].map((item) => (
              <NavLink key={item.to} to={item.to} className={navLinkClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Botón hamburguesa — solo mobile */}
          <button
            className="md:hidden text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-white/40"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            aria-controls="offcanvas-nav"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
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
          </button>
        </div>
      </header>

      {/* Offcanvas overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
        onClick={() => setMenuOpen(false)}
      />

      {/* Offcanvas panel */}
      <nav
        id="offcanvas-nav"
        aria-label="Menú de navegación"
        aria-hidden={!menuOpen}
        className={`md:hidden fixed top-0 right-0 h-full w-72 max-w-[80vw] bg-primary-deep z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header del panel */}
        <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">
          <h3 className="text-white">Menú</h3>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white/70 hover:text-white p-1 rounded focus:outline-none focus:ring-2 focus:ring-white/40"
            aria-label="Cerrar menú"
          >
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
          </button>
        </div>

        {/* Links */}
        <ul className="flex flex-col gap-1 p-4 mt-2">
          {[...navLeft, ...navRight].map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block py-3 px-4 rounded text-sm font-medium tracking-wide transition-colors duration-200 ${
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
    </>
  );
}
