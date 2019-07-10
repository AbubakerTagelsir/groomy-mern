const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
    },
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "users"
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

module.exports = Customer = mongoose.model("customers", CustomerSchema);
