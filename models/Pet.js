const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PetSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
    },
    gender: {
        type: String,
        enum: ["Male", "Female"]
    },
    customer: {
        type: Schema.Types.ObjectId,
        ref: 'customers',
        required: true
    },
    petType: {
        type: String,
        enum:["Dog", "Cat"]
    },
    petBreed: {
        type: Schema.Types.ObjectId,
        ref: 'petBreeds',
    },
    notes: {
        type: String,
    },
    birthdate: {
        type: Date,
        required: true,
    },
    active: {
        type: Boolean,
        default: true
    },
    date: {
        type: Date,
        default: Date.now
    },
});

module.exports = Pet = mongoose.model("pets", PetSchema);


