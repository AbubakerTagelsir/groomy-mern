// imports
const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateBreed(data){
    let errors = {};
    data.name = !isEmpty(data.name) ? data.name : "";
    data.petType = !isEmpty(data.petType) ? data.petType : "";
    if (Validator.isEmpty(data.name)) {
        errors.name = "Name field is required!";
      }
    if (!Validator.equals(data.petType, "Dog") && !Validator.equals(data.petType, "Cat")) {
        errors.petType = "Invalid Pet Type!";
      }
      if (Validator.isEmpty(data.name)) {
        errors.petType = "pet Type is required!";
      }
    return {
        errors,
        isValid: isEmpty(errors)
    }
};