const express = require("express")
const categoriesModel = require("../models/Category")

module.exports = class categoriesRoutes {
    static find(req, res) {
        categoriesModel
            .find({}).
            populate({ path: 'Category', strictPopulate: false })
            .then((category) => {
                res.status(200).json({ categories: category })
            })
            .catch((error) => {
                res.status(400).json({ error: error.message })
            })
    }

    static create(req, res) {
        const category = new categoriesModel(req.body);
        category
            .save({})
            .then((category) => {
                res.status(200).json(category);
            })
            .catch((error) => {
                res.status(400).json({ error: error.message })
            })
    }

    static findOne(req, res) {
        categoriesModel.findById(req.params._id)
            .then((category) => {
                res.status(200).json(category);
            })
            .catch((error) => {
                res.status(400).json({ error: error.message })
            })
    }

    static update(req, res) {
        const { _id } = req.params;
        const { name, excerpt } = req.body;

        categoriesModel.findByIdAndUpdate(_id, { name, excerpt })
            .then((category) => {
                res.status(200).json({ category: category.name });
            })
            .catch((error) => {
                res.status(400).json({ error: error.message })
            })
    }

    static remove(req, res) {
        categoriesModel.findByIdAndDelete(req.params._id)
            .then((category) => {
                res.status(200).json({ category: category });
            })
            .catch((error) => {
                res.status(400).json({ error: error.message })
            })
    }
}
