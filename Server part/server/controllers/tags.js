const express = require("express")
const tagsModel = require("../models/Tag")

module.exports = class categoriesRoutes {
    static find(req, res) {
        tagsModel
            .find({}).
            populate({ path: 'Tag', strictPopulate: false })
            .then((tag) => {
                res.status(200).json({ tags: tag })
            })
            .catch((error) => {
                res.status(400).json({ error: error.message })
            })
    }

    static create(req, res) {
        const tag = new tagsModel(req.body);
        tag
            .save({})
            .then((tag) => {
                res.status(200).json(tag);
            })
            .catch((error) => {
                res.status(400).json({ error: error.message })
            })
    }

    static findOne(req, res) {
        tagsModel.findById(req.params._id)
            .then((tag) => {
                res.status(200).json(tag);
            })
            .catch((error) => {
                res.status(400).json({ error: error.message })
            })
    }

    static update(req, res) {
        const { _id } = req.params;
        const { name } = req.body;

        tagsModel.findByIdAndUpdate(_id, { name })
            .then((tag) => {
                res.status(200).json({ tag: tag.name });
            })
            .catch((error) => {
                res.status(400).json({ error: error.message })
            })
    }

    static remove(req, res) {
        tagsModel.findByIdAndDelete(req.params._id)
            .then((tag) => {
                res.status(200).json({ tag: tag });
            })
            .catch((error) => {
                res.status(400).json({ error: error.message })
            })
    }
}
