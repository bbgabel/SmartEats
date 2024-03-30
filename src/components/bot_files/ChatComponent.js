import React, { useState } from 'react';
import axios from 'axios';

function ChatComponent() {
    const [userInput, setUserInput] = useState('');
    const [botResponse, setBotResponse] = useState('Welcome to SmartEatz. Before we start, would you mind providing me with your age?');

    const sendApiRequest = (input) => {
        axios.post('http://localhost:3000/chatbot', input)
            .then(response => {
                console.log(response.data);
                setBotResponse(response.data);
                // Do something with botResponse if needed
            })
            .catch(error => {
                console.error("API Request Error:", error);
            });
    };

    const handleInputChange = (event) => {
        const input = event.target.value;
        setUserInput(input);
    };

    const handleSubmit = () => {
        const input = userInput;
        sendApiRequest(input);
    };

    //eventually add pictures wtih async for botResponse on seventh question

    return (
        <div>
            <p>ChatBot Prototype</p>
            <input
                className="textbox"
                placeholder="Say Hi!"
                type="text"
                value={userInput}
                onChange={handleInputChange}
            />
            <button onClick={handleSubmit}>Submit</button>
            <p>{botResponse}</p>
        </div>
    );
}

export default ChatComponent;
