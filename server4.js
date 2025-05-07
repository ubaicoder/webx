const express = require('express');
const { MongoClient } = require('mongodb'); 
const app = express()
const uri = 'mongodb://localhost:27017' 
const PORT = 4000
let db
MongoClient.connect(uri)
    .then(client => {
        db=client.db('nnew')
        console.log('Connected to Mongodhb')
    }).catch(err => console.error(err))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})
app.post('/adduser',(req,res)=>{
    const newuse = {Name:'ubai',Age:90}
    db.collection('user').insertOne(newuse)
        .then(()=>res.redirect('/'))
        .catch((err)=>console.error(err))
})
app.get('/getusers',(req,res)=>{
    db.collection('users').find({}).toArray()
        .then((users)=>res.send(users))
        .catch((err)=>console.error(err))
        
})
app.post('/deleteuser',(req,res)=>{
    const detluse = {Name:'ubao'}
    db.collection('users').deleteOne(detluse)
        .then(()=>res.redirect('/'))
        .catch(()=>console.error(err))
})
