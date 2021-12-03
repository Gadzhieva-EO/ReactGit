import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import "./MessageForm.css";

export const MessageForm = ({ messageList, setMessageList }) => {
    const [messageAuthor, setMessageAuthor] = useState("");
    const [messageText, setMessageText] = useState("");
    const handleAuthorChange = (e) => setMessageAuthor(e.target.value);
    const handleTextChange = (e) => setMessageText(e.target.value);

    const handleAdd = (e) => {
        const newMessage = {
            id: uuidv4(),
            author: messageAuthor,
            text: messageText,
        };
        setMessageAuthor("");
        setMessageText("");
        return setMessageList([...messageList, newMessage]);
    };

    return (
        <form
            className="message-form"
            action="#"
            onSubmit={(e) => {
                e.preventDefault();
            }}
        >
            <input
                className="message-form__author"
                value={messageAuthor}
                onChange={handleAuthorChange}
                placeholder="Who are you?"
            />
            <TextField
                required
                id="outlined-required"
                className="message-form__text"
                label="Required"
                value={messageText}
                onChange={handleTextChange}
                placeholder="Put your text"
            />
            <Button
                variant="contained" endIcon={<SendIcon />} onClick={handleAdd}>Send
            </Button>
        </form>
    );
};
