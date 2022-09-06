import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import ChatWindow from './ChatWindow'


const users = [{ username: "Amy" }, { username: "John" }];

const App = () => {
  // If the user did not type anything, he/  not be allowed to submit.
  
const [messages , setMessages] = useState([])


function onMessage (username, message){
const newMessage ={
  username: username,
  text: message
}
setMessages(prevMessages => [...prevMessages, newMessage])
}

  return (
    <div className="App" id="app">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div className="container">
       

      {users.map((user) => (
          <ChatWindow
            key={user.username}
            user={user}
            messages={messages}
            onMessage={onMessage}
          />
        ))}

      </div>
    </div>
  );
};

export default App;
