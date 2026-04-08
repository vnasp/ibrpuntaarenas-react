export interface ChicagoTextSection {
  kind: "text";
  id: string;
  label: string;
  title: string;
  paragraphs: string[];
}

export interface ChicagoBriefSection {
  kind: "brief";
  id: string;
  label: string;
  title: string;
  points: string[];
}

export interface ChicagoArticleSection {
  kind: "article";
  id: string;
  label: string;
  title: string;
  affirm: string;
  deny: string;
  denyLabel?: string; // defaults to "NEGAMOS"
}

export type ChicagoSection =
  | ChicagoTextSection
  | ChicagoBriefSection
  | ChicagoArticleSection;

export const chicagoSections: ChicagoSection[] = [
  {
    kind: "text",
    id: "introduccion",
    label: "Introducción",
    title: "Declaración de Chicago",
    paragraphs: [
      "Como iglesia, afirmamos que la doctrina de la inerrancia de las Escrituras es esencial para la fe cristiana.",
      "En un contexto donde la autoridad y veracidad de la Biblia han sido cuestionadas, la Declaración de Chicago sobre la Inerrancia Bíblica (1978) fue redactada para expresar con claridad y precisión la enseñanza bíblica respecto a la naturaleza de las Escrituras.",
      "Este documento afirma que la Biblia, siendo inspirada por Dios, es completamente verdadera y confiable en todo lo que enseña, y que constituye la autoridad final en materia de fe y vida.",
      "No sostenemos esta declaración como una autoridad por sobre la Escritura, sino como una exposición fiel que nos ayuda a comprender, afirmar y defender la doctrina bíblica de la inerrancia.",
    ],
  },
  {
    kind: "brief",
    id: "declaracion-breve",
    label: "Declaración Breve",
    title: "Una Declaración Breve",
    points: [
      "Dios, que es la verdad misma y dice solamente la verdad, ha inspirado las Sagradas Escrituras para de este modo revelarse al mundo perdido a través de Jesucristo como Creador y Señor, Redentor y Juez. Las Sagradas Escrituras son testimonio de Dios acerca de sí mismo.",
      "Las Sagradas Escrituras, siendo la Palabra del propio Dios, escrita por hombres preparados y dirigidos por su Espíritu, tienen autoridad divina infalible en todos los temas que tocan; deben ser obedecidas como mandamientos de Dios en todo lo que ellas requieren; deben de ser acogidas como garantía de Dios en todo lo que prometen.",
      "El Espíritu Santo, autor divino de las Escrituras, las autentifica en nuestro propio espíritu por medio de su testimonio y abre nuestro entendimiento para comprender su significado.",
      "Siendo completa y verbalmente dadas por Dios, las Escrituras son sin error o falta en todas sus enseñanzas, tanto en lo que declaran acerca de los actos de creación de Dios, acerca de los eventos de la historia del mundo, acerca de su propio origen literario bajo la dirección de Dios, como en su testimonio de la gracia redentora de Dios en la vida de cada persona.",
      "La autoridad de la Escrituras es inevitablemente afectada si esta inerrancia divina es de algún modo limitada o ignorada, o es sometida a cierta opinión de la verdad que es contraria a la de la Biblia; tales posiciones ideológicas causan grandes pérdidas al individuo y a la Iglesia.",
    ],
  },
  {
    kind: "article",
    id: "articulo-i",
    label: "Artículo I",
    title: "Artículo I",
    affirm:
      "Que las Santas Escrituras deben de ser recibidas como la absoluta Palabra de Dios.",
    deny: "Que las Escrituras reciban su autoridad de la Iglesia, de la tradición o de cualquier otra fuente humana.",
  },
  {
    kind: "article",
    id: "articulo-ii",
    label: "Artículo II",
    title: "Artículo II",
    affirm:
      "Que las Escrituras son la suprema norma escrita por la cual Dios enlaza la conciencia, y que la autoridad de la Iglesia está bajo la autoridad de las Escrituras.",
    deny: "Que los credos de la Iglesia, los concilios o las declaraciones tengan mayor o igual autoridad que la autoridad de la Biblia.",
  },
  {
    kind: "article",
    id: "articulo-iii",
    label: "Artículo III",
    title: "Artículo III",
    affirm:
      "Que la Palabra escrita es en su totalidad la revelación dada por Dios.",
    deny: "Que la Biblia sea simplemente un testimonio de la revelación, o sólo se convierta en revelación cuando haya contacto con ella, o dependa de la reacción del hombre para confirmar su validez.",
  },
  {
    kind: "article",
    id: "articulo-iv",
    label: "Artículo IV",
    title: "Artículo IV",
    affirm:
      "Que Dios, el cual hizo al hombre a su imagen, usó el lenguaje como medio para comunicar su revelación.",
    deny: "Que el lenguaje humano esté tan limitado por nuestra humanidad que sea inadecuado como un medio de revelación divina. Negamos además que la corrupción de la cultura humana y del lenguaje por el pecado haya coartado la obra de inspiración de Dios.",
  },
  {
    kind: "article",
    id: "articulo-v",
    label: "Artículo V",
    title: "Artículo V",
    affirm:
      "Que la revelación de Dios en las Sagradas Escrituras fue hecha en una forma progresiva.",
    deny: "Que una revelación posterior, la cual puede completar una revelación inicial, pueda en alguna forma corregirla o contradecirla. Negamos además que alguna revelación normativa haya sido dada desde que el Nuevo Testamento fue completado.",
  },
  {
    kind: "article",
    id: "articulo-vi",
    label: "Artículo VI",
    title: "Artículo VI",
    affirm:
      "Que las Sagradas Escrituras en su totalidad y en cada una de sus partes, aún las palabras escritas originalmente, fueron divinamente inspiradas.",
    deny: "Que la inspiración de las Escrituras pueda ser considerada como correcta solamente en su totalidad al margen de sus partes, o correcta en alguna de sus partes pero no en su totalidad.",
  },
  {
    kind: "article",
    id: "articulo-vii",
    label: "Artículo VII",
    title: "Artículo VII",
    affirm:
      "Que la inspiración fue una obra por la cual Dios, por medio de su Espíritu y de escritores humanos, nos dio su Palabra. El origen de la Escrituras es divino. El modo usado para transmitir esta inspiración divina continúa siendo, en gran parte, un misterio para nosotros.",
    deny: "Que esta inspiración sea el resultado de la percepción humana, o de altos niveles de concientización de cualquier clase.",
  },
  {
    kind: "article",
    id: "articulo-viii",
    label: "Artículo VIII",
    title: "Artículo VIII",
    affirm:
      "Que Dios, en su obra de inspiración, usó la personalidad característica y el estilo literario de cada uno de los escritores que Él había elegido y preparado.",
    deny: "Que Dios haya anulado las personalidades de los escritores cuando causó que ellos usaran las palabras exactas que Él había elegido.",
  },
  {
    kind: "article",
    id: "articulo-ix",
    label: "Artículo IX",
    title: "Artículo IX",
    affirm:
      "Que la inspiración de Dios, la cual de ninguna manera les concedía omnisciencia a los autores bíblicos, les garantizaba sin embargo, que sus declaraciones eran verdaderas y fidedignas en todo a lo que éstos fueron impulsados a hablar y a escribir.",
    deny: "Que la finitud o el estado de perdición de estos escritores, por necesidad o por cualquier otro motivo, introdujeran alguna distorsión de la verdad o alguna falsedad en la Palabra de Dios.",
  },
  {
    kind: "article",
    id: "articulo-x",
    label: "Artículo X",
    title: "Artículo X",
    affirm:
      "Que la inspiración de Dios, en sentido estricto, se aplica solamente al texto autográfico de las Escrituras, el cual gracias a la providencia de Dios, puede ser comprobado con gran exactitud por los manuscritos que están a la disposición de todos los interesados. Afirmamos además que las copias y traducciones de la Escrituras son la Palabra de Dios hasta el punto en que representen fielmente los manuscritos originales.",
    deny: "Que algún elemento esencial de la fe cristiana esté afectado por la ausencia de los textos autográficos. Negamos además que la ausencia de dichos textos resulte en que la reafirmación de la inerrancia bíblica sea considerada como inválida o irrelevante.",
  },
  {
    kind: "article",
    id: "articulo-xi",
    label: "Artículo XI",
    title: "Artículo XI",
    affirm:
      "Que las Escrituras, habiendo sido divinamente inspiradas, son infalibles de modo que nunca nos podrían engañar, y son verdaderas y fiables en todo lo referente a los asuntos que trata.",
    deny: "Que sea posible que la Biblia en sus declaraciones, sea infalible y errada al mismo tiempo. La infalibilidad y la inerrancia pueden ser diferenciadas pero no separadas.",
  },
  {
    kind: "article",
    id: "articulo-xii",
    label: "Artículo XII",
    title: "Artículo XII",
    affirm:
      "Que la Biblia es inerrante en su totalidad y está libre de falsedades, fraudes o engaños.",
    deny: "Que la infalibilidad y la inerrancia bíblica se limiten a temas espirituales, religiosos o redentores, excluyendo las afirmaciones en los campos de la historia y la ciencia. Negamos además que las hipótesis científicas sobre la historia de la tierra puedan usarse adecuadamente para anular la enseñanza de las Escrituras sobre la creación y el diluvio.",
  },
  {
    kind: "article",
    id: "articulo-xiii",
    label: "Artículo XIII",
    title: "Artículo XIII",
    affirm:
      "Que el uso de la palabra inerrancia es correcto como término teológico para referirnos a la completa veracidad de las Escrituras.",
    deny: "Que sea correcto evaluar las Escrituras de acuerdo con las normas de verdad y error que sean ajenas a su uso o propósito. Negamos además que la inerrancia sea invalidada por fenómenos bíblicos como la falta de precisión técnica moderna, las irregularidades gramaticales u ortográficas, las descripciones observables de la naturaleza, el reportaje de falsedades, el uso de hipérboles y de números completos, el arreglo temático del material, la selección de material diferente en versiones paralelas, o el uso de citas libres.",
  },
  {
    kind: "article",
    id: "articulo-xiv",
    label: "Artículo XIV",
    title: "Artículo XIV",
    affirm: "la unidad y consistencia intrínsecas de las Escrituras.",
    deny: "Que presuntos errores y discrepancias que todavía no hayan sido resueltos menoscaben las verdades declaradas en la Biblia.",
  },
  {
    kind: "article",
    id: "articulo-xv",
    label: "Artículo XV",
    title: "Artículo XV",
    affirm:
      "Que la doctrina de la inerrancia está basada en la enseñanza bíblica acerca de la inspiración.",
    deny: "Que las enseñanzas de Jesús acerca de las Escrituras puedan ser descartadas por apelaciones a acomodación o a cualquier limitación natural de su humanidad.",
  },
  {
    kind: "article",
    id: "articulo-xvi",
    label: "Artículo XVI",
    title: "Artículo XVI",
    affirm:
      "Que la doctrina de la inerrancia ha sido esencial durante la historia de la Iglesia en lo que a su fe se refiere.",
    deny: "Que la inerrancia sea una doctrina inventada por el protestantismo académico, o que sea una posición reaccionaria postulada en respuesta a una crítica negativa de alto nivel intelectual.",
  },
  {
    kind: "article",
    id: "articulo-xvii",
    label: "Artículo XVII",
    title: "Artículo XVII",
    affirm:
      "Que el Espíritu Santo da testimonio de las Escrituras y asegura a los creyentes de la veracidad de la Palabra escrita de Dios.",
    deny: "Que este testimonio del Espíritu Santo obre separadamente de las Escrituras o contra ellas.",
  },
  {
    kind: "article",
    id: "articulo-xviii",
    label: "Artículo XVIII",
    title: "Artículo XVIII",
    affirm:
      "Que el texto de las Escrituras debe interpretarse por la exégesis gramática histórica, teniendo en cuenta sus formas y recursos literarios, y que las Escrituras deben ser usadas para interpretar cualquier parte de sí mismas.",
    deny: "la legitimidad de cualquier tratamiento del texto de las Escrituras, o de la búsqueda de fuentes que puedan llevar a que sus enseñanzas se consideren relativas y no históricas, descartándolas o rechazando su declaración de autoría.",
    denyLabel: "RECHAZAMOS",
  },
  {
    kind: "article",
    id: "articulo-xix",
    label: "Artículo XIX",
    title: "Artículo XIX",
    affirm:
      "Que una confesión de la completa autoridad, infalibilidad e inerrancia de las Escrituras es fundamental para tener una comprensión sólida de la totalidad de la fe cristiana. Afirmamos además que dicha confesión tendría que llevarnos a una mayor conformidad a la imagen de Jesucristo.",
    deny: "Que dicha confesión sea necesaria para salvación. Negamos además, sin embargo, que esta inerrancia pueda ser rechazada sin que tenga graves consecuencias para el individuo y para la Iglesia.",
  },
];
