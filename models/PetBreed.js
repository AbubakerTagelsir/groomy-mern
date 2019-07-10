const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PetBreedSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    petType: {
        type: String,
        enum:["Dog", "Cat"]
    },
    date: {
        type: Date,
        default: Date.now
    },
});

module.exports = PetBreed = mongoose.model("petBreeds", PetBreedSchema);
