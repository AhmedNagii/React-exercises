
import MessagesHistory from './MessagesHistory'
import AddMessage  from "./AddMessage";


const ChatWindow = ({ user, messages, onMessage }) => {
   

const handelOnMessage = (message) => {
    onMessage(user.username, message);
}
   

    return (
        <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{user.username}</div>
            <MessagesHistory messages={messages}  user={user}/>
           
             <AddMessage  onMessage={handelOnMessage}/>
            
        </div>
    )
}


export default ChatWindow