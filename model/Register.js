const mongoose = require('mongoose');

const RegisterSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique:true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
});

const TaskModel = mongoose.model("TaskModel", RegisterSchema);

module.exports = TaskModel;
