// const MongoClient = require('mongodb').MongoClient
const {MongoClient,ObjectID, ObjectId} = require('mongodb')
MongoClient.connect('monogodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect to database')
    }
    console.log('Cnnection successful')

    db.collection('users').insertOne({
        name:'ade',
        age: '12',
        location:'13 glimore'
    },(err,results)=>{
        if(err){
            return console.log('Unexpected error',err)
        }
        console.log(JSON.stringify(results.ops,undefined,2))
    })

    db.collection('users').find().toArray().then(()=>{
        console.log(JSON.stringify(docs,undefined,2))
    },(err)=>{
        console.log('unexpected')
    })
    db.collection('users').find({_ID:new ObjectId('123')}).toArray().then(()=>{
        console.log(JSON.stringify(docs,undefined,2))
    },(err)=>{
        console.log('unexpected')
    })
    db.collection('users').find().count().then((count) =>{
        console.log(`todos count:${count}`)
    },(err)=>{
        console.log('unexpected')
    })
    db.collection('user').deleteMany({name:ade}).then((result)=>{
        console.log(result)
    },(err)=>{
        console.log('delete unsuccessful')
    })
    db.close()
})

