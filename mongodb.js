// const MongoClient = require('mongodb').MongoClient
const { MongoClient } = require('mongodb');

let db;
const mongoo = (callBack) => {
    MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp')
        .then((client) => {
            console.log('database successfully connected');
            db = client.db();
            callBack()
        })
        .catch((err) => {
            console.log(err);
            process.exit(1);
        });
};

module.exports = {
    mongoo,
    db
};