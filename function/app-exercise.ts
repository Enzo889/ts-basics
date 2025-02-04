// basic function
const add = (a: number, b: number): number => {
  return a + b;
};

const contar = (heroes: string[]): number => {
  return heroes.length;
};

var superHeroes: string[] = [
  "Superman",
  "Batman",
  "Flash",
  "Wonder Woman",
  "Green Lantern",
  "Aquaman",
];

contar(superHeroes);

// args by default

const callBatman = (call: boolean = false) => {
  call
    ? console.log("BatiSignal activated")
    : console.log("BatiSignal desactivated");
};

callBatman();

// rest parameters

const unirHeroes = (...personas: string[]): string => {
  return personas.join(", ");
};

// function type

const noHaceNada = (
  numero: number,
  texto: string,
  booleano: boolean,
  arreglo: string[]
) => {};

// crear el tipod de funcion que acepte la funcion noHaceNada

const noHaceNadaTampoco: (
  numero: number,
  texto: string,
  booleano: boolean,
  arreglo: string[]
) => void = noHaceNada;
