import React from "react";
import logo from "./logo.svg";
import "./App.css";
/* import "./Message.css";  //если вставить сюда, то тоже работает, но я так поняла, что правильнее - в сам компонент вставлять - ?*/
import { Message } from "./Message";

const App = () => {
  const name = "friends";
  const greet = "Welcome!";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* {<p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>} */}
        <h2>Hello, {name}!</h2>
        {/*  //приветствие */}
        <Message greet={greet} />
      </header>
    </div>
  );
};

export default App;
