// const MongoClient = require('mongodb').MongoClient
const { MongoClient } = require('mongodb');

let _db;
const mongoo = (callBack) => {
    MongoClient.connect('mongodb://127.0.0.1:27017/mytodoapp')
        .then((client) => {
            console.log('database successfully connected');
            _db = client.db();
            callBack()
        })
        .catch((err) => {
            console.log(err);
            process.exit(1);
        });
};

const getDb = () => {
    if (!_db) {
        throw new Error('Database is not available yet')
    }
    return _db;
}

module.exports = {
    mongoo,
    getDb
};