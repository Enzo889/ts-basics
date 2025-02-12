(() => {
  class Avenger {
    // es mas rapido y facil definir las propiedades de la clase en el constructor
    // private name: string;
    // public team: string;
    // public realName?: string;
    static avgAge: number = 35;
    static getAvgAge() {
      return `The average age of the avengers is: ${this.name} `;
    }

    constructor(
      private name: string,
      public team: string,
      public realName?: string
    ) {}

    // hacer metodos

    public bio() {
      return `El Superheroe: "${this.name}" pertenece al equipo de ${this.team}`;
    }
  }
  const antman: Avenger = new Avenger(
    "Antman",
    "Capitan America",
    "Scott Lang"
  );
  console.log(antman);
  console.log(Avenger.getAvgAge);
  console.log(antman.bio());
})();
