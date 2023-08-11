import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from "react";
import { Nav } from "react-bootstrap";
import Landing from "./components/Landing/Landing";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Chat/Home";
import socketIO from "socket.io-client";
import ChatPage from "./components/Chat/ChatPage";
import "./App.css";
import logo from "../src/components/Landing/quackhead.png";

const socket = socketIO.connect("http://localhost:4000");

function App() {
  return (
    <BrowserRouter>
      <Nav>
        <Link to="/">
          <img src={logo} alt="LOGO" height={50} width={50}></img>
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
