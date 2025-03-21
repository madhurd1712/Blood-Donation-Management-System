const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    name :{
        type: String,
        required: true
    },
    contact :{
        type: Number,
        required: true
    },
    password :{
        type: String,
        required: true
    }
});

const Admin = mongoose.model('admin', adminSchema);

module.exports = Admin;