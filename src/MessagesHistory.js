const MessagesHistory = ({user, messages}) => {
console.log(messages)

    console.log(messages)
    return(
        <ul className="message-list">
        {messages.map((message, index) => (
            <li
                key={index}
                className={
                    message.username === user.username
                        ? "message sender"
                        : "message recipient"
                }
            >
                <p>{`${message.username}: ${message.text}`}</p>
            </li>
        ))}
    </ul>
    )
}


export default MessagesHistory