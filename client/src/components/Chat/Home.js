import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ socket }) => {
  const placeholder = "Enter Username";

  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("userName", userName);
    socket.emit("newUser", { userName, socketID: socket.id });
    navigate("/ChatPage");
  };
  return (
    <form className="home__container" onSubmit={handleSubmit}>
      <img
        src={require("../Landing/duckwalk.gif")}
        alt="duckWalking"
        height={200}
        width={250}
      ></img>

      <h2 className="home__header">Sign in to Open Chat</h2>

      <input
        type="text"
        placeholder={placeholder}
        minLength={6}
        name="username"
        id="username"
        className="username__input"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button className="home__cta">SIGN IN</button>
    </form>
  );
};

export default Home;
