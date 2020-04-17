var mongoose = require("mongoose")

mongoose.Promise = global.Promise;

var mongoDB = 'mongodb://localhost/shortner';

mongoose.connect(mongoDB,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>console.log('Connected to mongoDB')).catch((err)=>console.log(err));

let db = mongoose.Connection;