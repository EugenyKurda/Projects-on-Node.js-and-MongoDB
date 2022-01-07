const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const authorSchema = new Schema({
    name: {
        type: String,
        required: true,
        default: "author"
    },
    email: {
        type: String,
        required: true,
        default: "eugenykurda@gmail.com"
    },
    createdAt: Number,
    updatedAt: Number
})

module.exports = mongoose.model("Author", authorSchema)