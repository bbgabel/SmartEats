import React from 'react';
import { Link } from 'react-router-dom';
import './Start.css';

export default function Start() {
    return (
        <div class="Start">
            <header class="Start-header">
                <h1>This is the start...</h1>
                <Link to="/">Go Home</Link>
            </header>
        </div>
    )
}