(() => {
  class Avenger {
    constructor(public name: string, public realName: string) {
      console.log("Constructor Avenger llamado!");
    }

    protected getFullname() {
      return `${this.name} ${this.realName}`;
    }
  }

  class Xmen extends Avenger {
    constructor(name: string, realName: string, public isMutant: boolean) {
      super(name, realName);
      console.log("Constructor Xmen llamado");
    }

    // los getter tienen que tener un return
    get fullName() {
      return `${this.name} - ${this.realName}`;
    }

    // recibe un valor, solamente uno. tambien se puede usar logica
    set fullName(name: string) {
      if (name.length < 3) {
        throw new Error("EL nombre debe de ser mayor de 3 letras");
      }

      this.name = name;
    }

    getFullnameDesdeXmen() {
      console.log(super.getFullname());
    }
  }

  const wolverine = new Xmen("Wolverine", "Logan", true);

  wolverine.fullName = "James Mangold - ";

  console.log(wolverine.fullName);
  wolverine.getFullnameDesdeXmen();
})();
