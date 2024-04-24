require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());



const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://inbxmahbub:Ug2CfeF21CK2cqvo@coffeestore.ycvb6y6.mongodb.net/?retryWrites=true&w=majority&appName=coffeeStore";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const coffeeCollection = client.db("CoffeeDB").collection("coffee");
    const userCollection = client.db("userDB").collection("users");
    

    // Coffee database management
    app.post("/coffee", async(req,res)=>{
      const newCoffee = req.body;
      const result = await coffeeCollection.insertOne(newCoffee);
      res.send(result);
    })

    app.get("/coffee", async(req, res) => {
      const result = await coffeeCollection.find().toArray();
      res.send(result)
    })

    app.delete("/coffee/:id", async(req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)};
      const result = await coffeeCollection.deleteOne(query);
      res.send(result);
    })

    //get singleData to update
    app.get("/coffee/:id", async(req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}
      const result = await coffeeCollection.findOne(query);
      res.send(result);
    })

    // update
    app.put("/coffee/:id", async(req, res) => {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)};
      const updatedCoffee = req.body;
      const options = {upsert: true}
      const coffee = {
        $set:{
          name: updatedCoffee.name,
          chef: updatedCoffee.chef,
          price: updatedCoffee.price,
          quantity: updatedCoffee.quantity,
          supplier: updatedCoffee.supplier,
          taste: updatedCoffee.taste,
          category: updatedCoffee.category,
          details: updatedCoffee.details,
          photo: updatedCoffee.photo
        }
      }
      const result = await coffeeCollection.updateOne(filter, coffee, options);
      res.send(result);
    })

    //User management
    app.post("/users", async(req,res)=>{
      const newUser = req.body;
      const result = await userCollection.insertOne(newUser);
      res.send(result);
    })

    app.get("/users", async(req, res) => {
      const result = await userCollection.find().toArray();
      res.send(result);
    })


    app.patch("/users", async(req, res) => {
      const user = req.body;
      const filter = {email: user.email}
      const updateDoc = {
        $set:{
        email: user.email,
        creationTime: user.createdTime,
        lastLoginTime: user.lastLoginTime
        }
      }
      const options = {upsert: true}
      const result = await userCollection.updateOne(filter, updateDoc, options);
      res.send(result)
    })

    app.delete("/users/:id", async(req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)};
      const result = await userCollection.deleteOne(query);
      res.send(result);
    })



    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.get("/", (req, res) => {
  res.send("welcome to expresso coffee")
});
app.listen(port, () => {
  console.log("App is running on the port : ", port);
});