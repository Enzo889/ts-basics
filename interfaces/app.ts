// Crear interfaces
interface Auto {
  encender: boolean;
  velocidadMaxima: number;
  acelerar(): void;
}

interface Guason {
  reir?: boolean;
  comer?: boolean;
  llorar?: boolean;
}

interface Batman extends Guason {
  nombre: string;
  artesMarciales?: string[];
}

interface Ciudades {
  (ciudadanos: string[]): number;
}

interface Persona {
  nombre: string;
  edad: number;
  sexo: string;
  estadoCivil: string;
  imprimirBio(): void;
}

// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = (auto: Auto): void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
};

const batimovil: Auto = {
  encender: false,
  velocidadMaxima: 0,
  acelerar() {
    console.log("...... gogogo!!!");
  },
};

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

const guason: Batman = {
  reir: true,
  comer: true,
  llorar: false,
  nombre: "Joker",
};

const reir = (guason: Guason): void => {
  if (guason.reir) {
    console.log("JAJAJAJA");
  }
};

// Cree una interfaz para la siguiente funcion

const ciudadGotica: Ciudades = (ciudadanos: string[]): number => {
  return ciudadanos.length;
};

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
class Persona implements Persona {
  edad: number;
  estadoCivil: string;
  nombre: string;
  sexo: string;

  constructor(edad: number, estadoCivil: string, nombre: string, sexo: string) {
    this.edad = edad;
    this.estadoCivil = estadoCivil;
    this.nombre = nombre;
    this.sexo = sexo;
  }
  imprimirBio(): void {
    console.log(
      `Nombre: ${this.nombre}, Edad: ${this.edad}, Sexo: ${this.sexo}, Estado Civil: ${this.estadoCivil}`
    );
  }
}
