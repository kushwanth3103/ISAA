const express = require('express');
const mongoose = require('mongoose');
const app = express();

const formRoutes = require('./routes/formroutes');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb+srv://UserIssa:UserIssa1@cluster0.x8pdl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser :true, useUnifiedTopology:true}).then(()=>{
    console.log("MongoDB connected");
}).catch((error)=>{console.log(error);});
const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("MongoDB database connection established successfully");
})
app.use('/forms',formRoutes);

app.listen(8001,()=>{
    console.log('Server is running on port 5000');
});
