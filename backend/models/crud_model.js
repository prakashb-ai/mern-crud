const mongoose = require('mongoose');
const Crud = new mongoose.Schema({
   email:{
    type:String,
    required: true,
    },
    firstname: {
        type : String,
        required: true
    },
    lastname: {
        type:String,
        required: true
    },
    phone:{
        type: String,
        required: true
    }
})
Crud.virtual('id').get(function(){
    return this._id.toHexString();
});

Crud.set('toJSON',{
    virtuals: true,
})

module.exports = mongoose.model('crud',Crud);