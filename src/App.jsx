import React from "react";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import logo from "./logo.svg";
import "./App.css";
import { Message } from "./Message";
import { MessageList } from "./Components/MessageList";
import { MessageForm } from "./Components/MessageForm";

function App() {
  const name = "friends";
  const greet = "Welcome!";

  const INITIAL_MESSAGE = {
    id: uuidv4(),
    author: "BOT",
    text: "Welcome to the chat",
  };

  const BOT_MESSAGES = {
    id: uuidv4(),
    author: "BOT",
    text: "message just sent",
  };

  const [messageList, setMessageList] = useState([INITIAL_MESSAGE]);

  useEffect(() => {
    let timeOut;
    if (messageList[messageList.length - 1].author !== "BOT") {
      timeOut = setTimeout(() => {
        setMessageList([...messageList, BOT_MESSAGES]);
      }, 1500);
    };
    return () => {
      clearTimeout(timeOut);
    };
  }, [messageList]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Hello, {name}!</h2>
        <h3>Our chat</h3>
      </header>
      <main className="App-main">
        <Message greet={greet} />
        <MessageList messageList={messageList} />
        <MessageForm
          messageList={messageList}
          setMessageList={setMessageList}
        />
      </main>
      <footer className="App-footer"></footer>
    </div>
  );
}

export default App;
