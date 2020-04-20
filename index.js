const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express();
app.use(cors())
app.use(bodyParser.json())

const dbUser = 'dbUser'
const pass = 'cD2rfR0isT4GLz4f'

const users = ['akhyar', 'ronjon', 'Amrita', 'Kata', 'Laga', 'Hailagas']

//Database Connection


// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://dbUser:cD2rfR0isT4GLz4f@cluster0-aq4j6.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//     const collection = client.db("onlineProducts").collection("products");
//     // perform actions on the collection object
//     collection.insertOne({
//         name:"laptop",
//         price:120,
//         stock:10
//     }, (err, res)=>{
//         console.log('successfully inserted...')
//     })
//     console.log('Database connected.....')
//     client.close();
// });


const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dbUser:cD2rfR0isT4GLz4f@cluster0-aq4j6.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    const collection = client.db("onlineProducts").collection("products");
    // perform actions on the collection object
    console.log('database connected.....')
    client.close();
});


app.get("/", (req,res) => {
    const fruit = {
        fruit: "banana",
        price: 233
    }
    res.send(fruit)});

app.get("/fruits/banana", (req,res) =>{
    const fruit2 = {
        fruit: "pineapple",
        price: 22,
        fruit2: "malta",
        price: 33
    }
    res.send(fruit2)
});
app.get("/users/:id", (req,res) =>{

    const Id = req.params.id;
    const name = users[Id];
    res.send({Id, name})
})

//Post
app.post('/addUser', (req, res) =>{
    const user = req.body;
    user.id = 33;
    res.send(user);
    console.log(user);
});

app.listen(4200, () => console.log('Listening to port 4200'))