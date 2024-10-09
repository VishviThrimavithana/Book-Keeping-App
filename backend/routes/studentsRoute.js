const express = require('express');
const asynHandler = require('express-async-handler');
const Student = require('../models/Student');

const studentsRoute = express.Router();
studentsRoute.g

//Register
studentsRoute.post('/register',asynHandler(async(req, res) => {
    const{name,email,password} = req.body;
    const studentExists = await Student.findOne({email:email});
    if (studentExists) {
        throw new Error('Student Exist');
    }
    const studentCreated = await Student.create({email, name, password});
    res.send(studentCreated);
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
studentsRoute.post('/login',asynHandler(async(req,res) => {
const {email,password} = req.body;
const student = await Student.findOne({email});

if(student){
    res.send(student);
}else{
    res.send('Student Not Found!');
}

})
);
// studentsRoute.post('/login',(req,res) => {
//     res.send('Login route');
// });

//Update student
studentsRoute.put('/update',(req,res) => {
    res.send('Update route');
}); 

//Delete student
studentsRoute.delete('/:id',(req,res) => {
    res.send('Delete route');
});

//Fetch student
studentsRoute.get('/',(req,res) => {
    res.send('Fetch route');
});


module.exports = studentsRoute;