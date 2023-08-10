const express = require("express");
const mongoose = require('mongoose');
const app = express();
const cors = require("cors");
const http = require('http').Server(app);
const PORT = 4001;
const socketIO = require('socket.io')(http, {
  cors: {
      origin: ["http://localhost:3000", "http://localhost:4001"],
      methods: ["GET", "POST"],
      credentials: true
  }
});

require('dotenv').config();

const { User, Message } = require('./models');  

app.use(cors());
let users = [];

socketIO.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);

    socket.on("message", async data => {
        try {
            let user = await User.findOne({ username: data.userName });
            if (!user) {
                user = new User({ username: data.name, socketID: socket.id });
                await user.save();
         
            }

            const newMessage = new Message({ content: data.text, sender: user._id });
            console.log(newMessage);
            await newMessage.save();

            socketIO.emit("messageResponse", data);
        } catch (err) {
            console.error('Error storing message:', err);
        }
    });

    socket.on("typing", data => (
        socket.broadcast.emit("typingResponse", data)
    ));

    socket.on("newUser", async data => {
      console.log("Received data:", data);
        try {
            const newUser = new User({ username: data.userName, socketID: socket.id });
            await newUser.save();

            users.push(data);
            socketIO.emit("newUserResponse", users);
        } catch (err) {
            console.error('Error saving new user:', err);
        }
    });

    socket.on('disconnect', async () => {
        console.log('🔥: A user disconnected');
        try {
            await User.findOneAndRemove({ socketID: socket.id });
            users = users.filter(user => user.socketID !== socket.id);
            socketIO.emit("newUserResponse", users);
        } catch (err) {
            console.error('Error removing user:', err);
        }
    });
});

app.get("/api", (req, res) => {
    res.json({ message: "Hello" });
});

http.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

mongoose.connect(process.env.DATA_BASE, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connection established successfully"))
  .catch(err => console.log("Error in MongoDB connection: ", err));
