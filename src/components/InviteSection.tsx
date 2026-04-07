import { Link } from "react-router-dom";
import LineDecorator from "./LineDecorator";

export default function InviteSection() {
  return (
    <section className="relative py-16 sm:px-16 md:px-20 lg:px-32 overflow-hidden section">
      <div className="max-w-7xl mx-auto text-center">
        <LineDecorator text="Reunión del Día del Señor" />

        {/* Título */}
        <h2 className="font-heading text-white text-3xl sm:text-4xl md:text-5xl leading-tight mb-8">
          Te invitamos a congregarte
          <br />
          con nosotros
        </h2>

        {/* Cuerpo */}
        <div className="grid sm:grid-cols-2 gap-8 text-center sm:text-left">
          <p className="font-body text-white/80 text-base leading-relaxed">
            Nos reunimos cada domingo a las 11:30 para adorar a Dios conforme a
            las Escrituras, dando centralidad a la predicación fiel de Su
            Palabra.
          </p>
          <p className="font-body text-white/80 text-base leading-relaxed">
            Somos una iglesia cristiana en Punta Arenas que, por la gracia de
            Dios, ha sido formada a través de un proceso de crecimiento y
            afirmación en la verdad del evangelio.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10 mb-20">
          <Link
            to="/horarios"
            className="inline-block px-8 py-3 border border-white/50 hover:border-white hover:bg-white/10 text-white text-sm font-medium tracking-wide rounded transition-colors duration-200"
          >
            Ver horarios y ubicación
          </Link>
        </div>
      </div>
    </section>
  );
}
