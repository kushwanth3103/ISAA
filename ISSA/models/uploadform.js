const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const formSchema = new Schema({
    name:{
      type: String,
      required: true,
      trim: true
    },
    club:{
      type:String,
      required:true,
      trim:true
    }
});

const form = mongoose.model('form',formSchema);
module.exports = form;
