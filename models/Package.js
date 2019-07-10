const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PackageSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    },
    priceCat: {
        type: Number,
        default: 00,
    },
    priceDogSmall: {
        type: Number,
        default: 00,
    },
    priceDogMedium: {
        type: Number,
        default: 00,
    },
    priceDogLarge: {
        type: Number,
        default: 00,
    },
    services: [
        {
            type: String,
        }
    ]
});

module.exports = Package = mongoose.model("packages", PackageSchema);
