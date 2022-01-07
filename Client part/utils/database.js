const mongodb = require('mongodb')
const url = 'mongodb+srv://eugeny:12345trewq@cluster0.gcbjb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const client = new mongodb.MongoClient(url);
let database;

const connect = (callback) => {
    client
        .connect()
        .then((client) => {
            database = client.db()
            callback();
        })
        .catch((error) => {
            callback(error)
        })
}

const disconnect = (callback) => {
    client.close().then(() => {
        callback()
    })
}

const getDb = () => database

exports.connect = connect
exports.disconnect = disconnect
exports.getDb = getDb
