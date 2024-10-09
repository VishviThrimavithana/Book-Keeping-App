const express = require('express');
const asynHandler = require('express-async-handler');
const User = require('../models/User');

const usersRoute = express.Router();
usersRoute.g

//Register
usersRoute.post('/register',asynHandler(async(req, res) => {
    const{name,email,password} = req.body;
    const userExists = await User.findOne({email:email});
    if (userExists) {
        throw new Error('User Exist');
    }
    const userCreated = await User.create({email, name, password});
    res.send(userCreated);
}));
// usersRoute.post('/register', async (req, res) => {
//     try {
//         const { name,email,password } = req.body;
//         const user = await User.create({ name,email,password });
//         console.log(user);
//         res.send(user);


//     } catch (error) {
//         res.send(error);
//     }
   
// });


//Login user
usersRoute.post('/login',asynHandler(async(req,res) => {
const {email,password} = req.body;
const user = await User.findOne({email});

if(user){
    res.send(user);
}else{
    res.send('User Not Found!');
}

})
);
// usersRoute.post('/login',(req,res) => {
//     res.send('Login route');
// });

//Update user
usersRoute.put('/update',(req,res) => {
    res.send('Update route');
}); 

//Delete user
usersRoute.delete('/:id',(req,res) => {
    res.send('Delete route');
});

//Fetch user
usersRoute.get('/',(req,res) => {
    res.send('Fetch route');
});


module.exports = usersRoute;