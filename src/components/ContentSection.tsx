export default function ContentSection() {
  return (
    <section id="quienes-somos" className="bg-bg py-20 px-8 sm:px-16 md:px-24">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Columna de texto */}
          <div>
            <p className="uppercase tracking-[0.28em] text-xs font-body text-text-muted mb-4">
              Quiénes somos
            </p>
            <h2 className="font-heading text-text text-3xl sm:text-4xl leading-tight mb-6">
              Una comunidad fundada
              <br />
              en la Palabra de Dios
            </h2>
            <div className="w-10 h-px bg-accent mb-8" />
            <p className="font-body text-text-muted text-base leading-relaxed mb-4">
              Somos una iglesia cristiana en Punta Arenas que, por la gracia de
              Dios, ha sido formada en los últimos años con el propósito de
              vivir conforme a las Escrituras.
            </p>
            <p className="font-body text-text-muted text-base leading-relaxed">
              Nos congregamos para adorar a Dios, siendo edificados por la
              predicación de Su Palabra y afirmados en la verdad del evangelio
              de Jesucristo.
            </p>
          </div>

          {/* Columna de cita destacada */}
          <div className="bg-primary/5 border-l-2 border-accent p-8 rounded-sm">
            <p className="font-serif italic text-text text-xl leading-relaxed mb-6">
              "Este Jesús es la piedra reprobada por vosotros los edificadores,
              la cual ha venido a ser cabeza del ángulo. Y en ningún otro hay
              salvación; porque no hay otro nombre bajo el cielo, dado a los
              hombres, en que podamos ser salvos."
            </p>
            <span className="font-body text-xs uppercase tracking-widest text-text-muted">
              -Hechos 4:11-12
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
