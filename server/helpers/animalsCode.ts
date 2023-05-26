// export const animalCodes = [


//   { title: "Abelhas", code: 22119 },
//   { title: "Asinino", code: 20583 },
//   { title: "Bovino", code: 18908 },
//   { title: "Bufalo", code: 19111 },
//   { title: "Caprino", code: 20582 },
//   { title: "Cisne", code: 24860 },
//   { title: "Equino", code: 20585 },
//   { title: "Galinha", code: 19090 },
//   { title: "Morcego", code: 21642 },
//   { title: "Ovino", code: 20586 },
//   { title: "Suino", code: 20588 },

// ]
// ;

export const animalToNumber = (animal: string) => {
  switch (animal) {
    case "Abelhas":
      return 22119;
    case "Asinino":
      return 20583;
    case "Bovino":
      return 18908;
    case "Bufalo":
      return 19111;
    case "Caprino":
      return 20582;
    case "Cisne":
      return 24860;
    case "Equino":
      return 20585;
    case "Galinha":
      return 19090;
    case "Morcego":
      return 21642;
    case "Ovino":
      return 20586;
    case "Suino":
      return 20588;

    default:
      return 0;
  }
};
