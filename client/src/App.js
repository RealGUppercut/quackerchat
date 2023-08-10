import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from "react";
import { Nav } from "react-bootstrap";
import Landing from "./components/Landing/Landing";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Chat/Home";
import socketIO from "socket.io-client";
import ChatPage from "./components/Chat/ChatPage";

const socket = socketIO.connect("http://localhost:4000");

function App() {
  return (
    <BrowserRouter>
      <Nav>
        <Link to="/">
          <img
            src="https://i.guim.co.uk/img/media/a5fb31e646d2677f9d44104a3b26ee42955f0acc/0_170_5100_3059/master/5100.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=aa3e8bddfcc681ae45c2d642734ccdbc"
            alt="LOGO"
            height={75}
            width={100}
          ></img>
        </Link>
        <Link to="/">Home</Link>
        <Link to="About">About</Link>
        <Link to="Chat">Chat</Link>
        <Link to="Contact">Contact</Link>
      </Nav>

      <Routes>
        <Route path="/" index element={<Landing />} />
        <Route path="/About" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home socket={socket} />}></Route>
        <Route path="/chat" element={<Home socket={socket} />}></Route>
        <Route path="/ChatPage" element={<ChatPage socket={socket} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
