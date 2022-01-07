const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tagSchema = new Schema({
    name: {
        type: String,
        reguired: true,
        default: "tag"
    },
    createdAt: Number,
    updatedAt: Number
}, {
    timestamps: true
})

module.exports = mongoose.model("Tag", tagSchema)