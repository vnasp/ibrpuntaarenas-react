import LineDecorator from "./LineDecorator";

export default function InviteSection() {
  return (
    <section className="relative py-16 px-8 sm:px-16 md:px-24 overflow-hidden section">
      <div className="max-w-4xl mx-auto text-center">
        <LineDecorator text="Únete a nosotros" />

        {/* Título */}
        <h2 className="font-heading text-white text-3xl sm:text-4xl md:text-5xl leading-tight mb-8">
          Encuéntrate con nosotros
          <br />
          cada domingo
        </h2>

        {/* Cuerpo */}
        <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto text-left">
          <p className="font-body text-white/80 text-base leading-relaxed">
            Nos reunimos cada domingo a las{" "}
            <strong className="text-white font-semibold">11:30 am</strong> y nos
            encantaría que te unieras a nosotros. Todos son bienvenidos, sin
            importar dónde estés en tu camino de fe.
          </p>
          <p className="font-body text-white/80 text-base leading-relaxed">
            Somos una comunidad con más de 60 años de historia en Punta Arenas.
            Nuestra misión, a lo largo de los años y de cara al futuro, es{" "}
            <span className="text-white font-medium italic">
              crecer juntos para la gloria de Dios
            </span>
            .
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10">
          <a
            href="#horarios"
            className="inline-block px-8 py-3 border border-white/50 hover:border-white hover:bg-white/10 text-white text-sm font-medium tracking-wide rounded transition-colors duration-200"
          >
            Ver horarios y ubicación
          </a>
        </div>
      </div>
    </section>
  );
}
