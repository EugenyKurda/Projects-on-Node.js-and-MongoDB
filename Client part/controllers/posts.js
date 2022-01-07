const express = require("express");
const { ObjectId } = require("mongodb");
const { getDb } = require('../utils/database');

module.exports = class PostRoutes {
    static find(req, res) {
        const db = getDb();
        const posts = db
            .collection('posts')
            .find()
            .toArray()
            .then((posts) => {
                res.render("home", { posts })
            })
            .catch((error) => {
                res.status(400).json({ error: error.message })
            })
    }

    static findOne(req, res) {
        const db = getDb();
        const id = req.params._id;
        const posts = db
            .collection('posts')
            .findOne({ _id: new ObjectId(id) })
            .then((post) => {
                res.render("postPage", { post })
            })
            .catch((error) => {
                res.status(400).json({ error: error.message })
            });
    }
}