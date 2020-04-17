var db = require("mongoose")

var ShortSchema = new db.Schema({
    
    url:{
        type: String,
        required:true
    },
    url_hash :{
        type: String,
        required:true
    }
})

module.exports = db.model('Url',ShortSchema);