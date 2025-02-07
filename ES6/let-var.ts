(() => {
  //siempre usar o tratar de usar const excepto que el nombre vaya a cambiar. y no usar por nada en el mundo var excepto que sea por razones de compatibilidad que versiones de ecmascript muy antiguas para tener compatibilidad con internet explorer.
  console.log("------------");

  type Persona = {
    name: string;
    age: number;
  };

  console.log("LET AND VAR");

  const Human: Persona = {
    name: "Enzo",
    age: 30,
  };

  Human.name = "Enzo Bustamante";

  const getName = () => {
    console.log(`this is my name: "${Human.name}"`);
  };

  //   getName = () => { no se pude modificar el nombre porque no es una variable
  //     console.log("New name");
  //   };

  getName();

  console.log("------------");
})();
