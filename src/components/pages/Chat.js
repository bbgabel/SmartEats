import React from 'react';
import ChatComponent from '../bot_files/ChatComponent';
import Slider from '../Items/Slider';
import './Chat.css';

export default function Chat() {
    return (
        <div className="Pre-Start">
            <Slider text="Type to chat now"/>
            <div className="Chat"> 
            <ChatComponent />
              <p>hi</p>
              <CurvedLine />
            </div>
        </div>
    )}

const CurvedLine = () => {
  return (
    <svg height="200" width="400">
      <line x1="50" y1="50" x2="350" y2="50" stroke="black" strokeWidth="1" />
    </svg>
  );
};
