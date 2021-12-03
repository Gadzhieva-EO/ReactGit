import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
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
        <Message greet={greet} />
        <h3>Our chat</h3>
      </header>
      <main className="App-main">
        <div className="ChatList">
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Chat1" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Chat2" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Chat3" />
              </ListItemButton>
            </ListItem>
          </List>
        </div>
        <div className="MessageArea">
          <MessageList messageList={messageList} />
          <MessageForm
            messageList={messageList}
            setMessageList={setMessageList}
          />
        </div>
      </main>
      <footer className="App-footer"></footer>
    </div>
  );
}

export default App;
