import heroBg from "../assets/hero.png";
import PageBanner from "../components/PageBanner";

export default function QuienesSomos() {
  return (
    <>
      <PageBanner
        decoratorText="Iglesia Bautista Reformada · Punta Arenas"
        title="Quiénes Somos"
        subtitle="Una comunidad fundada en la gracia de Dios"
      />

      {/* Historia */}
      <section className="bg-bg py-20 px-8 sm:px-16 md:px-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="uppercase tracking-[0.28em] text-xs font-body text-text-muted mb-4">
                Nuestra historia
              </p>
              <h2 className="font-heading text-text text-3xl sm:text-4xl leading-tight mb-6">
                Más de 60 años <br />
                sirviendo en Punta Arenas
              </h2>
              <div className="w-10 h-px bg-accent mb-8" />
              <p className="font-body text-text-muted text-base leading-relaxed mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="font-body text-text-muted text-base leading-relaxed mb-4">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <p className="font-body text-text-muted text-base leading-relaxed">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </div>

            <div className="relative">
              <img
                src={heroBg}
                alt="Congregación IBR Punta Arenas"
                className="w-full h-80 object-cover rounded-sm shadow-lg"
              />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-accent opacity-40 rounded-sm" />
            </div>
          </div>
        </div>
      </section>

      {/* Misión */}
      <section className="bg-primary/5 py-20 px-8 sm:px-16 md:px-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="border-l-2 border-accent pl-8">
            <p className="font-serif italic text-text text-2xl leading-relaxed mb-4">
              "Creciendo juntos para la gloria de Dios"
            </p>
            <span className="font-body text-xs uppercase tracking-widest text-text-muted">
              — Misión IBR Punta Arenas
            </span>
          </div>

          <div>
            <p className="uppercase tracking-[0.28em] text-xs font-body text-text-muted mb-4">
              Nuestra misión
            </p>
            <h2 className="font-heading text-text text-3xl leading-tight mb-6">
              Lo que nos mueve
            </h2>
            <p className="font-body text-text-muted text-base leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nemo enim
              ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
              sed quia consequuntur magni dolores eos qui ratione voluptatem
              sequi nesciunt.
            </p>
            <p className="font-body text-text-muted text-base leading-relaxed">
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet
              consectetur adipisci velit, sed quia non numquam eius modi tempora
              incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
