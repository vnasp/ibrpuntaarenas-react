export interface ConfessionChapter {
  number: number;
  title: string;
  content: string;
}

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.`;

export const confessionChapters: ConfessionChapter[] = [
  {
    number: 0,
    title: "Acerca de esta confesión",
    content: `La Segunda Confesión de Fe Bautista de Londres (1689) es uno de los documentos confesionales más importantes de la tradición bautista reformada. Fue redactada por pastores y representantes de congregaciones bautistas particulares de Inglaterra y Gales, y publicada en 1689.\n\nEste documento no se presenta como una regla autoritativa ni como un código de fe, sino como una ayuda en casos de controversia, una confirmación en la fe y un medio para edificación en justicia.\n\nEn él los miembros más jóvenes de nuestra iglesia tendrán un conjunto resumido de enseñanzas divinas, y por medio de pruebas bíblicas, estarán preparados para dar razón de la esperanza que hay en ellos.\n\n— Charles Haddon Spurgeon (1834–1892)`,
  },
  { number: 1, title: "De las Sagradas Escrituras", content: lorem },
  { number: 2, title: "De Dios y de la Santa Trinidad", content: lorem },
  { number: 3, title: "Del decreto de Dios", content: lorem },
  { number: 4, title: "De la creación", content: lorem },
  { number: 5, title: "De la divina providencia", content: lorem },
  {
    number: 6,
    title: "De la caída del hombre, del pecado y su castigo",
    content: lorem,
  },
  { number: 7, title: "Del pacto de Dios", content: lorem },
  { number: 8, title: "De Cristo el Mediador", content: lorem },
  { number: 9, title: "Del libre albedrío", content: lorem },
  { number: 10, title: "Del llamamiento eficaz", content: lorem },
  { number: 11, title: "De la justificación", content: lorem },
  { number: 12, title: "De la adopción", content: lorem },
  { number: 13, title: "De la santificación", content: lorem },
  { number: 14, title: "De la fe salvadora", content: lorem },
  {
    number: 15,
    title: "Del arrepentimiento para vida y salvación",
    content: lorem,
  },
  { number: 16, title: "De las buenas obras", content: lorem },
  { number: 17, title: "De la perseverancia de los santos", content: lorem },
  {
    number: 18,
    title: "De la seguridad de la gracia y de la salvación",
    content: lorem,
  },
  { number: 19, title: "De la ley de Dios", content: lorem },
  {
    number: 20,
    title: "Del evangelio y del alcance de su gracia",
    content: lorem,
  },
  {
    number: 21,
    title: "De la libertad cristiana y de la libertad de conciencia",
    content: lorem,
  },
  {
    number: 22,
    title: "De la adoración cristiana y del día de reposo",
    content: lorem,
  },
  { number: 23, title: "De los juramentos y votos lícitos", content: lorem },
  { number: 24, title: "De las autoridades civiles", content: lorem },
  { number: 25, title: "Del matrimonio", content: lorem },
  { number: 26, title: "De la iglesia", content: lorem },
  { number: 27, title: "De la comunión de los santos", content: lorem },
  { number: 28, title: "Del bautismo y la Cena del Señor", content: lorem },
  { number: 29, title: "Del bautismo", content: lorem },
  { number: 30, title: "De la Cena del Señor", content: lorem },
  {
    number: 31,
    title: "Del estado del hombre después de la muerte",
    content: lorem,
  },
  { number: 32, title: "Del juicio final", content: lorem },
];
