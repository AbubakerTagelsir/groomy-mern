// imports
const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validatePetInput(data) {
  let errors = {};
  data.name = !isEmpty(data.name) ? data.name : "";
  data.gender = !isEmpty(data.gender) ? data.gender : "";
  data.petType = !isEmpty(data.petType) ? data.petType : "";
  data.birthdate = !isEmpty(data.birthdate) ? data.birthdate : "";
  if (Validator.isEmpty(data.name)) {
    errors.name = "name field is required!";
  }
  if (Validator.isEmpty(data.gender)) {
    errors.gender = "gender field is required!";
  }
  if (Validator.isEmpty(data.petType)) {
    errors.petType = "petType field is required!";
  }
  if (Validator.isEmpty(data.birthdate)) {
    errors.birthdate = "birthdate field is required!";
  }
//   if (!Validator.isEmail(data.email)) {
//     errors.email = "Email is invalid!";
//   }
//   if (Validator.isEmpty(data.password)) {
//     errors.password = "Password field is required!";
//   }
//   if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
//     errors.password = "Password must be at least 6 characters!";
//   }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
