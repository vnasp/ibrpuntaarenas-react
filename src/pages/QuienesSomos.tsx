import PageBanner from "../components/PageBanner";
import background2 from "../assets/bg2.webp";
import background1 from "../assets/bg1.webp";

export default function QuienesSomos() {
  return (
    <>
      <PageBanner
        decoratorText="Iglesia Bautista Reformada · Punta Arenas"
        mobileDecoratorText="IBR · Punta Arenas"
        title="Quiénes Somos"
        subtitle="Afirmados en la verdad del evangelio y la Palabra de Dios"
        imageSrc={background2}
      />

      {/* Historia */}
      <section className="bg-bg py-20 px-8 sm:px-16 md:px-32">
        <div className="max-w-5xl lg:max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="uppercase tracking-[0.28em] text-xs font-body mb-4">
                Nuestra historia
              </p>
              <h2 className="font-heading text-text text-3xl sm:text-4xl leading-tight mb-6">
                Un proceso guiado por la <br />
                providencia de Dios
              </h2>
              <div className="w-10 h-px bg-accent mb-8" />
              <p className="font-body text-base leading-relaxed mb-4">
                Somos una iglesia cristiana en Punta Arenas comprometida con la
                predicación fiel de la Palabra de Dios y el evangelio de
                Jesucristo. Nuestra congregación tiene su origen en el proceso
                mediante el cual distintas familias, de manera independiente,
                llegaron al entendimiento del evangelio conforme a las
                Escrituras.
              </p>
              <p className="font-body text-base leading-relaxed mb-4">
                Estas convicciones nos llevaron a salir de los contextos en los
                que nos encontrábamos y a buscar congregarnos de manera fiel a
                la Palabra de Dios.
              </p>
              <p className="font-body text-base leading-relaxed mb-4">
                A partir del año 2018 comenzamos a reunirnos como un pequeño
                grupo, siendo acompañados inicialmente por hermanos de otras
                iglesias, y creciendo en el conocimiento de la verdad bíblica.
              </p>
              <p className="font-body text-base leading-relaxed mb-4">
                Durante los años de pandemia, el Señor nos sostuvo en medio de
                las dificultades y nos permitió perseverar, reuniéndonos para
                estudiar Su Palabra de manera constante. A través de ese tiempo,
                fuimos afirmados en convicciones doctrinales claras y en la
                centralidad del evangelio.
              </p>
              <p className="font-body text-base leading-relaxed mb-4">
                Con el tiempo, el Señor fue consolidando la congregación y
                añadiendo nuevos hermanos, permitiéndonos avanzar hacia una obra
                más estable. Asimismo, hemos recibido el apoyo y acompañamiento
                de iglesias hermanas que han sido de gran ayuda en este proceso.
              </p>
              <p className="font-body text-base leading-relaxed">
                Hoy nos congregamos como Iglesia Bautista Reformada, buscando
                glorificar a Dios en todo, mediante la predicación fiel de las
                Escrituras, la oración y una vida que refleje el señorío de
                Jesucristo.
              </p>
            </div>

            <div className="relative">
              <img
                src={background1}
                alt="Congregación IBR Punta Arenas"
                width={1536}
                height={1024}
                className="w-full h-80 object-cover rounded-sm shadow-lg"
              />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-accent opacity-40 rounded-sm" />
            </div>
          </div>
        </div>
      </section>

      {/* Misión */}
      <section className="bg-primary/5 py-20 sm:px-16 md:px-20 lg:px-32">
        <div className="max-w-5xl lg:max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="border-l-2 border-accent pl-8 order-2 md:order-1">
            <p className="font-serif italic text-text text-2xl leading-relaxed mb-4">
              "Proclamar fielmente la Palabra de Dios y el evangelio de
              Jesucristo"
            </p>
            <span className="font-body text-xs uppercase tracking-widest">
              — Misión IBR Punta Arenas
            </span>
          </div>

          <div className="order-1 md:order-2">
            <p className="uppercase tracking-[0.28em] text-xs font-body mb-4">
              Nuestra misión
            </p>
            <h2 className="font-heading text-text text-3xl leading-tight mb-6">
              Lo que nos mueve
            </h2>
            <p className="font-body text-base leading-relaxed mb-4">
              Nuestra misión es glorificar a Dios mediante la predicación fiel
              de Su Palabra, la proclamación del evangelio de Jesucristo y la
              edificación de la iglesia conforme a las Escrituras.
            </p>
            <p className="font-body text-base leading-relaxed">
              Buscamos que todo en la vida de la iglesia esté centrado en la
              verdad bíblica, viviendo en obediencia a Dios y dando testimonio
              del evangelio.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
