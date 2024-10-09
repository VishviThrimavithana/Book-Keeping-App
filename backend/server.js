
const express = require('express');
const mongoose = require('mongoose');
require('./config/dbConnect')();
const app = express();
const User = require('../backend/models/User');
const usersRoute = require('./routes/usersRoute');
const error = require('./middlewares/errorMiddlewareHandler');

//Passing body data
app.use(express.json());


//Routes
app.use('/api/users',usersRoute);

//Error middleware
app.use(error.errorMiddlewareHandler);
// });

//Login user
app.post('/api/users',(req,res) => {
    res.send('Login route');
});

//Update user
app.put('/api/users/update',(req,res) => {
    res.send('Update route');
}); 

//Delete user
app.delete('/api/users/:id',(req,res) => {
    res.send('Delete route');
});

//Fetch user
app.get('/api/users',(req,res) => {
    res.send('Fetch route');
});

//Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is up and Running ${PORT}`);
});
