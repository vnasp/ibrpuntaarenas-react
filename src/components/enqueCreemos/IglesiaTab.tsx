type NavigateView = "confesion" | "chicago";

export default function IglesiaTab({
  onNavigate,
}: {
  onNavigate: (view: NavigateView) => void;
}) {
  return (
    <article className="pb-20">
      <p className="uppercase tracking-[0.28em] text-xs font-body mb-3">
        Introducción
      </p>
      <h2 className="font-heading text-text text-3xl sm:text-4xl leading-tight mb-4">
        Declaración Doctrinal
      </h2>
      <div className="w-10 h-px bg-accent mb-10" />
      <div className="space-y-3 font-body text-base leading-relaxed mb-12">
        <p>
          Las siguientes declaraciones resumen las principales doctrinas que
          sostenemos como iglesia, conforme a la enseñanza de las Escrituras.
        </p>
      </div>

      <p className="font-heading font-medium text-text text-2xl text-center py-14 mx-auto">
        "Creemos que la Biblia es la única autoridad suficiente, segura e
        infalible para la fe y la vida."
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        <div className="border-l-2 border-accent pl-5 py-4 bg-primary/5 rounded-sm min-h-40">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-heading text-accent text-sm">01</span>
            <h3 className="font-heading text-text text-xl">
              Las Sagradas Escrituras
            </h3>
          </div>
          <p className="font-body text-base leading-relaxed">
            Creemos que la Biblia es la Palabra de Dios, inspirada, inerrante e
            infalible. Es la autoridad final en todo lo que creemos y
            practicamos.
          </p>
        </div>

        <div className="border-l-2 border-accent pl-5 py-4 bg-primary/5 rounded-sm min-h-40">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-heading text-accent text-sm">02</span>
            <h3 className="font-heading text-text text-xl">Dios</h3>
          </div>
          <p className="font-body text-base leading-relaxed">
            Creemos en un solo Dios verdadero, eterno y soberano, que existe en
            tres personas: Padre, Hijo y Espíritu Santo. Dios gobierna todas las
            cosas conforme a Su voluntad perfecta.
          </p>
        </div>

        <div className="border-l-2 border-accent pl-5 py-4 bg-primary/5 rounded-sm min-h-40">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-heading text-accent text-sm">03</span>
            <h3 className="font-heading text-text text-xl">
              El hombre y el pecado
            </h3>
          </div>
          <p className="font-body text-base leading-relaxed">
            Creemos que el ser humano fue creado a imagen de Dios, pero cayó en
            pecado. Como resultado, todos estábamos espiritualmente muertos y
            separados de Dios.
          </p>
        </div>

        <div className="border-l-2 border-accent pl-5 py-4 bg-primary/5 rounded-sm min-h-40">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-heading text-accent text-sm">04</span>
            <h3 className="font-heading text-text text-xl">
              Cristo y la salvación
            </h3>
          </div>
          <p className="font-body text-base leading-relaxed">
            Creemos que Jesucristo es el Hijo de Dios, plenamente Dios y
            plenamente hombre. Él vivió sin pecado, murió en la cruz como
            sustituto por los pecadores y resucitó al tercer día. La salvación
            es por gracia, mediante la fe, y no por obras.
          </p>
        </div>

        <div className="border-l-2 border-accent pl-5 py-4 bg-primary/5 rounded-sm min-h-40">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-heading text-accent text-sm">05</span>
            <h3 className="font-heading text-text text-xl">
              La soberanía de Dios en la salvación
            </h3>
          </div>
          <p className="font-body text-base leading-relaxed">
            Creemos que Dios, en Su gracia soberana, salva a pecadores por medio
            de Jesucristo. El evangelio debe ser proclamado a todos, pero sólo
            aquellos a quienes Dios escogió desde la eternidad son eficazmente
            llamados por el Espíritu Santo y llevados a la salvación, la cual es
            obra de Dios desde el principio hasta el fin.
          </p>
        </div>

        <div className="border-l-2 border-accent pl-5 py-4 bg-primary/5 rounded-sm min-h-40">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-heading text-accent text-sm">06</span>
            <h3 className="font-heading text-text text-xl">
              Arrepentimiento y fe
            </h3>
          </div>
          <p className="font-body text-base leading-relaxed">
            Creemos que la respuesta al evangelio es el arrepentimiento del
            pecado y la fe en Jesucristo. Ambos son dones de Dios y evidencias
            de una obra real de salvación.
          </p>
        </div>

        <div className="border-l-2 border-accent pl-5 py-4 bg-primary/5 rounded-sm min-h-40">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-heading text-accent text-sm">07</span>
            <h3 className="font-heading text-text text-xl">La iglesia</h3>
          </div>
          <p className="font-body text-base leading-relaxed">
            Creemos que la iglesia es el pueblo de Dios, compuesto por todos los
            creyentes en Cristo. Cada iglesia local es una congregación de
            creyentes bautizados que se reúnen para adorar a Dios, ser
            edificados y proclamar el evangelio.
          </p>
        </div>

        <div className="border-l-2 border-accent pl-5 py-4 bg-primary/5 rounded-sm min-h-40">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-heading text-accent text-sm">08</span>
            <h3 className="font-heading text-text text-xl">Las ordenanzas</h3>
          </div>
          <p className="font-body text-base leading-relaxed">
            Creemos que el Señor Jesucristo instituyó dos ordenanzas para la
            iglesia:
          </p>
          <ul className="mt-3 space-y-2 font-body text-base">
            <li className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              <span>El bautismo de creyentes, por inmersión</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              <span>La Cena del Señor</span>
            </li>
          </ul>
          <p className="font-body text-base leading-relaxed mt-3">
            Estas no salvan, pero son actos de obediencia y testimonio.
          </p>
        </div>

        <div className="border-l-2 border-accent pl-5 py-4 bg-primary/5 rounded-sm min-h-40">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-heading text-accent text-sm">09</span>
            <h3 className="font-heading text-text text-xl">
              La vida cristiana
            </h3>
          </div>
          <p className="font-body text-base leading-relaxed">
            Creemos que los creyentes son llamados a vivir en santidad,
            obedeciendo la Palabra de Dios. Las buenas obras son el fruto de la
            salvación, no su causa.
          </p>
        </div>

        <div className="border-l-2 border-accent pl-5 py-4 bg-primary/5 rounded-sm min-h-40">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-heading text-accent text-sm">10</span>
            <h3 className="font-heading text-text text-xl">
              La perseverancia de los santos
            </h3>
          </div>
          <p className="font-body text-base leading-relaxed">
            Creemos que aquellos que han sido verdaderamente salvos perseverarán
            hasta el fin, porque Dios los guarda por Su poder.
          </p>
        </div>

        <div className="border-l-2 border-accent pl-5 py-4 bg-primary/5 rounded-sm min-h-40">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-heading text-accent text-sm">11</span>
            <h3 className="font-heading text-text text-xl">
              La segunda venida y el juicio final
            </h3>
          </div>
          <p className="font-body text-base leading-relaxed">
            Creemos que Jesucristo volverá corporalmente. Habrá resurrección de
            los muertos y un juicio final, donde Dios juzgará con justicia tanto
            a vivos como a muertos.
          </p>
        </div>
      </div>
      <div className="mt-14 pt-8 border-t border-border">
        <p className="font-body text-base leading-relaxed mb-5">
          Los puntos anteriores resumen de manera general las principales
          doctrinas que sostenemos como iglesia. Para una exposición más
          completa y detallada, te invitamos a revisar los siguientes
          documentos:
        </p>
        <ul className="space-y-3 font-body text-base">
          <li className="flex items-start gap-3">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
            <button
              onClick={() => onNavigate("confesion")}
              className="text-primary underline underline-offset-2 hover:opacity-75 transition-opacity text-left cursor-pointer"
            >
              Confesión Bautista de Fe de 1689
            </button>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
            <button
              onClick={() => onNavigate("chicago")}
              className="text-primary underline underline-offset-2 hover:opacity-75 transition-opacity text-left cursor-pointer"
            >
              Declaración de Chicago sobre la inerrancia bíblica
            </button>
          </li>
        </ul>
      </div>
    </article>
  );
}
