// imports
const express = require("express");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");


// router
const router = express.Router();

//models
const Pet = require('../../models/Pet');
const PetBreed = require('../../models/PetBreed');

//validators
const ValidateBreedInput = require('../../validation/breed');
const ValidatePetInput = require('../../validation/pet');

const keys = require("../../config/keys");
router.post('/newbreed', (req,res)=>{
    const {errors, isValid} = ValidateBreedInput(req.body);
    // res.json({msg:"Creating new Breed", errors:errors, isValid: isValid});
    if(!isValid){
        return res.status(400).json(errors);
    }
    PetBreed.findOne({name: req.body.name, petType:req.body.petType}).then(breed => {
        if(breed){
            errors.breed = "Breed is already exist!"
            return res.status(400).json(errors);
        }else{
            //create breed
        }
    });
    
});
router.post('/new',
            passport.authenticate('jwt', {session:false}), 
            (req,res)=>{
                const {errors, isValid} = ValidatePetInput(req.body);
                if(!isValid){
                    return res.status(404).json(errors)
                }
                console.log(req.user);
                console.log(req.user.customer);
                if(!req.user.customer){
                    return res.status(404).json({nonCustomer: "There's no customer linked with this user!"})
                }
                const newPet = new Pet({
                    name: req.body.name,
                    petType: req.body.petType,
                    gender: req.body.gender,
                    petBreed: req.body.petBreed,
                    birthdate: req.body.birthdate,
                    customer: req.user.customer
                });
                newPet.save().then(pet=>res.json(pet)).catch(err=>res.status(400).json(err));
            });
router.get("/test", (req, res) => res.json({ msg: "pets Works" }));

module.exports = router;
