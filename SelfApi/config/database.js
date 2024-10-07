const mongoose = require('mongoose');
//connect your database (MongodDb) via mongoose
const connectDb = () => {
   //connect via mongoose
   mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
   })
   .then( ()=>{
    console.log("Connected Successfull to MONGODB");
   })
   .catch( (e) => {
    console.log("ERROR WHILE DB CONNECTING");
    console.error(e);
   });
};

module.exports = connectDb;