import React from 'react';
import Slider from '../Items/Slider';
import Chatbot from 'react-chatbot-kit'
import config from '../bot_files/config.js';
import ActionProvider from '../bot_files/ActionProvider.js';
import MessageParser from '../bot_files/MessageParser.js';
import './Chat.css';

export default function Chat() {
    return (
        <div className="Pre-Start">
            <Slider text="Type to chat now"/>
            <div className="Chat">
            <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
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
