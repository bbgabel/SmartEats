import React, { useState } from 'react';
import ChatComponent from '../bot_files/ChatComponent';
import Slider from '../Items/Slider';
import { FaRegMessage } from "react-icons/fa6";
import './Chat.css';

export default function Chat() {
    const [isChatOpen, setIsChatOpen] = useState(false);

    const toggleChat = () => {
        setIsChatOpen(!isChatOpen);
    };

    return (
        <div className="Pre-Start">
            <Slider text="Type to chat now"/>
            <div className="Chat">
              <h1>Hi isem en tu</h1>
                <div className="ChatIcon" onClick={toggleChat}><FaRegMessage /></div>
                {isChatOpen && <ChatComponent />}
            </div>
        </div>
    );
}
