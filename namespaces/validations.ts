// es como un agrupador global. se pueden agrupar clases, funciones, variables, etc.
// no se suele usar namespaces en desarrollo moderno. solo en casos muy especificos como para crear librerias o frameworks

namespace Validations {
  export const validateString = (str: string): boolean => {
    return str.length > 3 ? true : false;
  };

  export const validateDate = (date: Date): boolean => {
    return isNaN(date.valueOf()) ? false : true;
  };

  export const validateEmail = (email: string): boolean => {
    return email.includes("@") ? true : false;
  };
}

console.log(Validations.validateDate(new Date()));
console.log(Validations.validateString("abcdef"));
console.log(Validations.validateEmail("enzo@dsads.com"));
