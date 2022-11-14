//require
const mongoose = require('mongoose');

const task_schema = new mongoose.Schema({
    desc:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    dueDate:{
        type:String,
        required:true
    }   
});

const Tasks = mongoose.model('Tasks', task_schema);
module.exports = Tasks;