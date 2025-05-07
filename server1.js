const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const port = 4000;
const uri = 'mongodb://localhost:27017';
let db

MongoClient.connect(uri)
    .then(client => {
        console.log('Connected to mongodb');
        db = client.db('pracdb1')
    }) .catch(err => console.error(err))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

//Insert
app.post('/addusers', (req,res)=>{
    const newuse = {Name: req.body.name, Email: req.body.email}
    db.collection('users').insertOne(newuse)
        .then(()=>res.redirect('/'))
        .catch(err => console.error(err))

})

//Read
app.get('/getusers', (req,res)=>{
    db.collection('users').find({}).toArray()
        .then(users=> res.send(users)) 
        .catch(err => console.error(err))  
})

app.post('/deleteuser', (req,res)=>{
    const deluse = {Name: req.body.name}
    db.collection('users').deleteOne(deluse)
        .then(()=>res.redirect('/'))
        .catch(err => console.error(err))



})
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
    console.log('http://localhost:4000')
})