"use strict";
var Validations;
(function (Validations) {
    Validations.validateString = (str) => {
        return str.length > 3 ? true : false;
    };
    Validations.validateDate = (date) => {
        return isNaN(date.valueOf()) ? false : true;
    };
    Validations.validateEmail = (email) => {
        return email.includes("@") ? true : false;
    };
})(Validations || (Validations = {}));
console.log(Validations.validateDate(new Date()));
console.log(Validations.validateString("abcdef"));
console.log(Validations.validateEmail("enzo@dsads.com"));
//# sourceMappingURL=main.js.map