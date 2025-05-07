const { MongoClient } = require('mongodb')
async function main() {
    const uri = 'mongodb://localhost:27017'
    const client = new MongoClient(uri)

    try{
        client.connect(uri)
        console.log('Connected to Mongodb')
        const db=client.db('paec')
        const users = db.collection('users')
        await users.deleteMany({})

        //Insert 
        await users.insertMany([
            {Name:'Ubao',Age:34},
            {Name: 'Zoheb',Age:45},
        ])
        console.log('Documents inserted')
        //Read
        const alluse = await users.find({},{projection:{_id:0,Name:1,Age:1}}).toArray()
        console.log(alluse)
        //update
        await users.updateOne({Name:"ubai"},{$set:{Age:78}})
        console.log('Document updated')
        //delete
        await users.deleteOne({Name:'Ubai'})
        console.log('Document deleted')
    } catch(err){
        console.log(err)
    } finally{
        client.close()
    }
}
main()