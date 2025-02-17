// no se suele usar namespaces en desarrollo moderno. solo en casos muy especificos como para crear librerias o frameworks

namespace Validations {
  export const validateString = (str: string): boolean => {
    return str.length > 3 ? true : false;
  };

  export const validateDate = (date: Date): boolean => {
    return isNaN(date.valueOf()) ? false : true;
  };
}

console.log(Validations.validateDate(new Date()));
console.log(Validations.validateString("abcdef"));
