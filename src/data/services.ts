export interface Service {
  day: string;
  time: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    day: "Domingo",
    time: "11:30",
    title: "Culto Día del Señor",
    description:
      "Nos congregamos cada domingo para adorar a Dios mediante la predicación fiel de Su Palabra.",
  },
  {
    day: "Miércoles",
    time: "19:30",
    title: "Oración y estudio",
    description:
      "Nos reunimos para orar y estudiar la Palabra de Dios, reconociendo nuestra dependencia de Él.",
  },
];
