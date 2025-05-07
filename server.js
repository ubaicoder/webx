const{ MongoClient } = require('mongodb');
async function main(){
    const uri = 'mongodb://localhost:27017';
    const client = new MongoClient(uri);
    try{
        await client.connect();
        console.log('Connected to MongoDB');
        const db = client.db('pracdb');
        const users = db.collection('users');
        await users.deleteMany({});
        // Insert
        await users.insertMany([
            { Name: 'Ubai Ratangiri', Age: 21, MartialStatus: 'Single'},
            { Name: 'Idris Ratangiri', Age: 18, MartialStatus: 'Relationship'},
            { Name: 'Zoheb Merchant', Age: 21, MartialStatus: 'Married'},
        ])
        console.log('Inserted  documents into the collection');
        // Read
        const alluser = await users.find({},{projection:{_id:0, Name:1, Age:1, MartialStatus:1}}).toArray();
        console.log(alluser);

        // Update
        await users.updateOne({Name: 'Idris Ratangiri'},{$set:{MartialStatus: 'Single'}});
        console.log('Updated the document')

        //Delete
        await users.deleteOne({Name: 'Zoheb Merchant'})
        console.log('Deleted the document')
        
    } catch(err){
        console.error(err);
    } finally{
        await client.close()
    }
   
    
}
main();