import PageBanner from "../components/PageBanner";
import InviteSection from "../components/InviteSection";

export default function Contacto() {
  return (
    <>
      <PageBanner
        decoratorText="Iglesia Bautista Reformada · Punta Arenas"
        title="Contacto"
        subtitle="Nos encantaría conocerte"
      />

      <section className="bg-bg py-20 px-8 sm:px-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          {/* Info column */}
          <div>
            <p className="uppercase tracking-[0.28em] text-xs font-body text-text-muted mb-4">
              Información
            </p>
            <h2 className="font-heading text-text text-3xl sm:text-4xl leading-tight mb-4">
              Estamos para <br />
              escucharte
            </h2>
            <div className="w-10 h-px bg-accent mb-8" />

            <div className="space-y-6">
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
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.75L2.25 6.75"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-body text-xs text-text-muted uppercase tracking-widest mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:ibrpuntaarenas@gmail.com"
                    className="font-body text-text hover:text-primary transition-colors"
                  >
                    ibrpuntaarenas@gmail.com
                  </a>
                </div>
              </div>

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
                  <p className="font-body text-xs text-text-muted uppercase tracking-widest mb-1">
                    Dirección
                  </p>
                  <p className="font-body text-text">
                    Ignacio Carrera Pinto 852, Local B
                  </p>
                  <p className="font-body text-text-muted text-sm">
                    Punta Arenas, Chile
                  </p>
                </div>
              </div>

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
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-body text-xs text-text-muted uppercase tracking-widest mb-1">
                    Horarios
                  </p>
                  <p className="font-body text-text">
                    Domingo 11:30 — Culto Día del Señor
                  </p>
                  <p className="font-body text-text">
                    Viernes 19:30 — Reunión de Oración
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-sm overflow-hidden shadow-md border border-border h-80 md:h-[26rem]">
            <iframe
              title="Ubicación Iglesia Bautista Reformada Punta Arenas"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001.1!2d-70.9053!3d-53.1638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbdaff9c0b0c5e0c1%3A0x0!2sIgnacio%20Carrera%20Pinto%20852%2C%20Punta%20Arenas%2C%20Chile!5e0!3m2!1ses!2scl!4v1700000000000!5m2!1ses!2scl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <InviteSection />
    </>
  );
}
