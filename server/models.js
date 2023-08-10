const mongoose = require('mongoose');

// User Schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    socketID: String
});

// Message Schema
const messageSchema = new mongoose.Schema({
    content: String,
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    //socketID: String
},

{
    timestamps: true
});

const User = mongoose.model('User', userSchema);
const Message = mongoose.model('Message', messageSchema);

module.exports = { User, Message };
