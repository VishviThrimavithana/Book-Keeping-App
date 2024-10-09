const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


//Schema

const StudentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },

});

StudentSchema.pre('save',async function (next) {
   
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
    // console.log(this);
});

const Student = mongoose.model('Student',StudentSchema);

module.exports = Student;