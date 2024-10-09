const mongoose = require('mongoose');

const dbConnect = () =>{
    // mongoose.connect('mongodb+srv://vishvidworkspace:12345678%40vishvi@cluster0.3vkpd.mongodb.net/mydatabase?retryWrites=true&w=majority',{
        // mongoose.connect('mongodb+srv://vishvidworkspace:12345678%40vishvi@cluster0.3vkpd.mongodb.net/',{
            mongoose.connect('mongodb+srv://vishvidworkspace:12345678%40vishvi@cluster0.3vkpd.mongodb.net/',{
        // useFindAndModify:true,
        // useUnifiedTopology:true,
        // useCreateIndex:true,
        // useNewUrlParser:true,
    }).then(()=>console.log('Db Connected')).catch(err => console.log(err));
    
};

module.exports = dbConnect;