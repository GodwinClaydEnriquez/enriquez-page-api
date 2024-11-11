const expres = require('express');
const mongoose = require('mongoose');
const User = require('./models/user');
const app = expres();
const PORT = 3000;

const databaseURL = 'mongodb+srv://gads:googlepassword@enriquez-page-api.6fclm.mongodb.net/?retryWrites=true&w=majority'

//this is to create database connection
mongoose.connect(databaseURL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("Mongodb connected..."))
    .catch(err => console.error("Mongodb connection error...\n",err))

app.use(expres.json());

app.get('/', (req,res) =>{
    res.send("Test");
})

//creating data into the database
app.post('/user', async (req, res) => {
    try {
        const newUser = new User(req.body); //creating of new user request
        await newUser.save(); //saving it in the database
        res.status(201).json(newUser); //this is the respond of created user
    } catch (err) {
        console.log(err);
    }
})

app.listen(PORT, () => {
    console.log("I am running...")
})