import background1 from "../assets/bg1.webp";
import PageBanner from "../components/PageBanner";
import InviteSection from "../components/InviteSection";
import background2 from "../assets/bg2.webp";

const services = [
  {
    day: "Domingo",
    time: "11:30",
    title: "Culto Día del Señor",
    description:
      "Nos congregamos cada domingo para adorar a Dios mediante la predicación fiel de Su Palabra.",
  },
  {
    day: "Viernes",
    time: "19:30",
    title: "Reunión de Oración",
    description:
      "Nos reunimos reconociendo nuestra dependencia de Dios y presentando nuestras peticiones conforme a Su voluntad.",
  },
];

export default function Horarios() {
  return (
    <>
      <PageBanner
        decoratorText="Iglesia Bautista Reformada · Punta Arenas"
        mobileDecoratorText="IBR · Punta Arenas"
        title="Horarios"
        subtitle="Nos congregamos para adorar a Dios conforme a Su Palabra"
        imageSrc={background2}
      />

      <section className="bg-bg py-20 sm:px-16 md:px-20 lg:px-32">
        <div className="max-w-5xl lg:max-w-7xl mx-auto">
          <p className="uppercase tracking-[0.28em] text-xs font-body mb-4 text-center">
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
                  src={background1}
                  alt={s.title}
                  width={1536}
                  height={1024}
                  className="w-full h-72 sm:h-52 md:h-60 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary/90 via-primary/50 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-start p-4">
                  <div className="inline-flex self-start items-center px-3 py-1 mb-2 rounded-sm border border-accent/40 bg-primary-deep/60">
                    <p className="uppercase tracking-[0.28em] text-[9px] font-body text-white/90">
                      {s.day}
                    </p>
                  </div>
                  <p className="font-heading text-white text-4xl leading-none mb-2">
                    {s.time}
                  </p>
                  <h3 className="font-heading text-white text-xl mb-3">
                    {s.title}
                  </h3>
                  <div className="w-8 h-px bg-accent mb-4" />
                  <p className="font-body text-white/75 text-[13px] leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 border border-border rounded-sm p-8 bg-primary/5">
            <div className="flex gap-4 items-start">
              <div className="mt-1 w-6 h-6 shrink-0 flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="w-5 h-5 text-accent"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-body text-xs uppercase tracking-widest mb-1">
                  Dirección
                </p>
                <p className="font-body text-text">
                  Ignacio Carrera Pinto 852, Local B
                </p>
                <p className="font-body text-sm">Punta Arenas, Chile</p>
                <a
                  href="https://maps.google.com/?q=Ignacio+Carrera+Pinto+852,+Punta+Arenas,+Chile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 font-body text-xs text-accent hover:text-primary uppercase tracking-widest transition-colors duration-200"
                >
                  Ver en Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InviteSection />
    </>
  );
}
