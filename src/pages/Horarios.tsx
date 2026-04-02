import heroBg from "../assets/hero.png";
import PageBanner from "../components/PageBanner";
import InviteSection from "../components/InviteSection";

const services = [
  {
    day: "Domingo",
    time: "11:30",
    title: "Culto Día del Señor",
    description:
      "Nos congregamos cada domingo para adorar a Dios, proclamar su Palabra, celebrar los sacramentos y edificarnos mutuamente en la fe.",
  },
  {
    day: "Viernes",
    time: "19:30",
    title: "Reunión de Oración",
    description:
      "Un espacio semanal para acercarnos juntos al trono de la gracia, interceder por la iglesia, la ciudad y las naciones.",
  },
];

export default function Horarios() {
  return (
    <>
      <PageBanner
        decoratorText="Iglesia Bautista Reformada · Punta Arenas"
        title="Horarios"
        subtitle="Te esperamos para adorar a Dios juntos"
      />

      <section className="bg-bg py-20 px-8 sm:px-16">
        <div className="max-w-4xl mx-auto">
          <p className="uppercase tracking-[0.28em] text-xs font-body text-text-muted mb-4 text-center">
            Reuniones semanales
          </p>
          <h2 className="font-heading text-text text-3xl sm:text-4xl text-center leading-tight mb-3">
            Nuestros servicios
          </h2>
          <div className="flex justify-center mb-16">
            <div className="w-10 h-px bg-accent" />
          </div>

          <div className="grid sm:grid-cols-2 gap-10">
            {services.map((s) => (
              <div
                key={s.day}
                className="group relative overflow-hidden rounded-sm shadow-md"
              >
                <img
                  src={heroBg}
                  alt={s.title}
                  className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary/90 via-primary/50 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="uppercase tracking-[0.28em] text-xs font-body text-accent mb-1">
                    {s.day}
                  </p>
                  <p className="font-heading text-white text-4xl leading-none mb-2">
                    {s.time}
                  </p>
                  <h3 className="font-heading text-white text-xl mb-3">
                    {s.title}
                  </h3>
                  <div className="w-8 h-px bg-accent mb-4" />
                  <p className="font-body text-white/75 text-sm leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 border border-border rounded-sm p-8 text-center">
            <p className="font-body text-text-muted text-sm uppercase tracking-widest mb-3">
              Dirección
            </p>
            <p className="font-heading text-text text-xl">
              Ignacio Carrera Pinto 852, Local B
            </p>
            <p className="font-body text-text-muted text-sm mt-1">
              Punta Arenas, Chile
            </p>
          </div>
        </div>
      </section>

      <InviteSection />
    </>
  );
}
