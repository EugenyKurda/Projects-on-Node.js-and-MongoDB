const express = require("express")
const authorsModel = require("../models/Author")

module.exports = class authorsRoutes {
    static find(req, res) {
        authorsModel
            .find({}).
            populate({ path: 'Author', strictPopulate: false })
            .then((author) => {
                res.status(200).json({ authors: author })
            })
            .catch((error) => {
                res.status(400).json({ error: error.message })
            })
    }

    static create(req, res) {
        const author = new authorsModel(req.body);
        author
            .save({})
            .then((author) => {
                res.status(200).json(author);
            })
            .catch((error) => {
                res.status(400).json({ error: error.message })
            })
    }

    static findOne(req, res) {
        authorsModel.findById(req.params._id)
            .then((author) => {
                res.status(200).json(author);
            })
            .catch((error) => {
                res.status(400).json({ error: error.message })
            })
    }

    static update(req, res) {
        const { _id } = req.params;
        const { name, email } = req.body;

        authorsModel.findByIdAndUpdate(_id, { name, email })
            .then((author) => {
                res.status(200).json({ authorUpdate: author });
            })
            .catch((error) => {
                res.status(400).json({ error: error.message })
            })
    }

    static remove(req, res) {
        authorsModel.findByIdAndDelete(req.params._id)
            .then((author) => {
                res.status(200).json({ authorDelete: author });
            })
            .catch((error) => {
                res.status(400).json({ error: error.message })
            })
    }
}
