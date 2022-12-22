//const { MongoClient } = require('mongodb');
// or as an es module:
 import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://pepe:asd456@localhost:27017/coderhouse?authSource=admin';
const client = new MongoClient(url);

// Database Name
const dbName = 'coderhouse';
const dbCollection = 'productos';



  // Use connect method to connect to the server
  try {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const productsColec = db.collection(dbCollection);
    
    const productos = await productsColec.find().toArray()
    console.log(productos)

  } catch (error){
    console.log(error)

  } finally {
    client.close()
  }


;