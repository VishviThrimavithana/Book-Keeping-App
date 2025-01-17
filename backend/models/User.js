const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


//Schema

const UserSchema = new mongoose.Schema({
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

UserSchema.pre('save',async function (next) {
   
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
    // console.log(this);
});

const User = mongoose.model('User',UserSchema);

module.exports = User;