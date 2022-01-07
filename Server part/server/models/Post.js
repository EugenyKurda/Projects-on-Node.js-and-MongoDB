const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    excerpt: {
        type: String,
    },
    thumbnail: {
        type: String,
    },
    categories: {
        type: [mongoose.Types.ObjectId],
        ref: 'Category',
        required: true
    },
    tags: {
        type: [mongoose.Types.ObjectId],
        ref: 'Tag',
        required: true
    },
    author: {
        type: mongoose.Types.ObjectId,
        ref: 'Author',
        required: true
    },
    createdAt: Date,
    updatedAt: Date
}, {
    timestamps: true
})

module.exports = mongoose.model("Post", postSchema)