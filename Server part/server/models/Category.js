const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        default: "category"
    },
    excerpt: {
        type: String,
        default: "выписка"
    },
    createdAt: Number,
    updatedAt: Number
}, {
    timestamps: true
})

module.exports = mongoose.model("Category", categorySchema);