(() => {
  // Tipos
  const batman: string = "Bruce";
  const superman: string = "Clark";

  const existe: boolean = false;

  // Tuplas
  const parejaHeroes: [string, string] = [batman, superman];
  const villano: [string, number, boolean] = ["Lex Lutor", 5, true];

  // Arreglos
  const aliados: string[] = ["Mujer Maravilla", "Acuaman", "San", "Flash"];

  //Enumeraciones

  enum power {
    acuamanPower = 0,
    batmanPower = 1,
    flashPower = 5,
    supermanPower = 100,
  }
  const fuerzaFlash: power = power.flashPower;
  const fuerzaSuperman: power = power.supermanPower;
  const fuerzaBatman: power = power.batmanPower;
  const fuerzaAcuaman: power = power.acuamanPower;

  // Retorno de funciones
  function activar_batiseñal(): string {
    return "activada";
  }

  function pedir_ayuda(): void {
    console.log("Auxilio!!!");
  }

  // Aserciones de Tipo
  const poder: any = "100";
  const largoDelPoder: number = (poder as string).length;
  console.log(largoDelPoder);
})();
