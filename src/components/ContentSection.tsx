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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="font-body text-text-muted text-base leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>

          {/* Columna de cita destacada */}
          <div className="bg-primary/5 border-l-2 border-accent p-8 rounded-sm">
            <p className="font-serif italic text-text text-xl leading-relaxed mb-6">
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam eaque ipsa
              quae ab illo inventore veritatis."
            </p>
            <span className="font-body text-xs uppercase tracking-widest text-text-muted">
              — Referencia bíblica
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
