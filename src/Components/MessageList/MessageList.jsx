import "./MessageList.css";

export const MessageList = ({ messageList }) => {
    return (
        <ul className="messageList">
            {messageList.map(({ id, author, text }) => (
                <li key={id}>
                    <div className="messageList__area">
                        <span className="messageList__author"> {author} </span>
                        <p className="messageList__text">{text}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
};
