import React, { useState } from 'react';
import './Items.css';
import lean from './lean.jpg';
import jacked from './jacked.jpg';
import swole from './swole.jpg';



export default function BodyType({updateActiveButton} ) {

    const [activeButton, setActiveButton] = useState(null);

    const handleClick = (buttonID) => {
        setActiveButton(buttonID);
        updateActiveButton(buttonID);
    }

    const check = (event) => {
        console.log(event.target.checked);
        console.log(event.target.id);
    }

    return (
        <div className="checkbox">
            <div className="label">
                        <label>Ectomorph</label>
                        <button className={`bodytype ${activeButton === 1 ? 'blue-button' : ''}`}
                        onClick={() => handleClick(1)}>
                            <img src={lean} alt="lean" className="bodytype"></img>
                        </button>
                    </div>
                    <div className="label">
                        <label>Mesomorph</label>
                        <button className={`bodytype ${activeButton === 2 ? 'blue-button' : ''}`}
                        onClick={() => handleClick(2)}>
                            <img src={jacked} alt="lean" className="bodytype"></img>
                        </button>
                    </div>
                    <div className="label">
                        <label>Endomorph</label>
                        <button className={`bodytype ${activeButton === 3 ? 'blue-button' : ''}`}
                        onClick={() => handleClick(3)}>
                            <img src={swole} alt="lean" className="bodytype"></img>
                        </button>
                    </div>

                    <div>
                        <div>
                            <label>Lactose Intolerant</label>
                        </div>
                        <input type="checkbox" id="lactose" onClick={check} className="box" />
                        <br></br> <br></br> <br></br>
                        <div>
                            <label>Gluten Free</label>
                        </div>
                        <input type="checkbox" id="gluten" onClick={check} className="box" />
                        <br></br> <br></br> <br></br>
                        <div>
                            <label>Nut Free</label>
                        </div>
                        <input type="checkbox" id="nut" onClick={check} className="box" />
                    </div>
        </div>
    )
}