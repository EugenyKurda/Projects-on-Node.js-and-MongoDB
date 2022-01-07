const express = require("express")
const postsModel = require("../models/Post")

module.exports = class PostRoutes {
    static find(req, res) {
        postsModel
            .find({})
            .populate({ path: 'Category', strictPopulate: false })
            .populate({ path: 'Tag', strictPopulate: false })
            .populate({ path: 'Author', strictPopulate: false })
            .then((posts) => {
                res.status(200).json({ posts: posts })
            })
            .catch((error) => {
                res.status(400).json({ error: error.message })
            })
    }

    static create(req, res) {
        const post = new postsModel(req.body);
        post
            .save({})
            .then((post) => {
                res.status(200).json(post);
            })
            .catch((error) => {
                res.status(400).json({ error: error.message })
            })
    }

    static findOne(req, res) {
        postsModel.findById(req.params._id)
            .then((post) => {
                res.status(200).json(post);
            })
            .catch((error) => {
                res.status(400).json({ error: error.message })
            })
    }

    static update(req, res) {
        const { _id } = req.params;
        const { ...data } = req.body;

        postsModel.findByIdAndUpdate(_id, { ...data })
            .then((post) => {
                res.status(200).json({ post: post });
            })
            .catch((error) => {
                res.status(400).json({ error: error.message })
            })
    }

    static remove(req, res) {
        postsModel.findByIdAndDelete(req.params._id)
            .then((post) => {
                res.status(200).json({ post: post });
            })
            .catch((error) => {
                res.status(400).json({ error: error.message })
            })
    }
}
