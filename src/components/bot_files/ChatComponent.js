import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

function ChatComponent() {
    const [userInput, setUserInput] = useState('');
    const [messages, setMessages] = useState([
        { text: 'Welcome to SmartEatz. Before we start, would you mind providing me with your age?', sender: 'bot' }
    ]);

    const messagesEndRef = useRef(null);

    const sendApiRequest = (input) => {
        axios.post('http://localhost:3000/chatbot', { input })
            .then(response => {
                const newBotResponse = response.data;
                const newMessages = [...messages, { text: newBotResponse, sender: 'bot' }];
                setMessages(newMessages);
            })
            .catch(error => {
                console.error("API Request Error:", error);
            });
    };

    const handleInputChange = (event) => {
        setUserInput(event.target.value);
    };

    const handleSubmit = () => {
        if (!userInput.trim()) return; // Don't send empty messages
        const newUserMessage = { text: userInput, sender: 'user' };
        setMessages([...messages, newUserMessage]);
        setUserInput('');
        sendApiRequest(userInput);
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="chat-container">
            <div className="message-container">
                {messages.map((message, index) => (
                    <div key={index} className={`message ${message.sender}`}>
                        {message.text}
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>
            <div className="input-container">
                <input
                    className="textbox"
                    placeholder="Say Hi!"
                    type="text"
                    value={userInput}
                    onChange={handleInputChange}
                />
                <button onClick={handleSubmit}>Send</button>
            </div>
        </div>
    );
}

export default ChatComponent;
