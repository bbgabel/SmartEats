import React from 'react';
import './Start.css';
import Slider from './Items/Slider';
import Profile from './Items/Profile';

import Gabel from './Items/img/Gabel.jpeg';
import Tucker from './Items/img/Tucker.jpg';
import nobody from './Items/img/nobody.jpg';

export default function About() {
    return (
        <div class="Pre-Start">
            <Slider text="Meet the team!"/>
            <div className="About">
                <br></br><br></br><br></br>

                <div className="row">
                    <div>
                        <Profile image={Gabel} name="Jeremiah Gabel" role="Lead Developer" text="Hello, my name is Jeremiah Gabel, I'm the architect of this project. I'm currently a senior at CSU majoring in software engineering, I also work as a software developer for the USDA. I have a deep passion for maintaining a healthy lifestyle, and I believe this tool could be extremely beneficial to building a healthy diet." />
                    </div>
                    <div>
                        <Profile image={nobody} name="Empty" role="Empty" text="Description here" />
                    </div>
                    <div>
                        <Profile image={Tucker} name="Tucker Hehn" role="Coordinator" text="Hi, my name is Tucker Hehn. I'm current a CSU Business major with an Information Systems concentration. I'm currently helping with the research and presentation of SmartEatz. I'm excited to see how we can use develop this site for the betterment of people's diets and all around well-being." />
                    </div>
                </div>
                <div className="dividor-bottom"></div>
                <div className="row">
                    <div>
                        <Profile image={nobody} name="Empty" role="Empty" text="Description here" />
                    </div>
                    <div>
                        <Profile image={nobody} name="Empty" role="Empty" text="Description here" />
                    </div>
                    <div>
                        <Profile image={nobody} name="Empty" role="Empty" text="Description here" />
                    </div>
                </div>
                
            </div>
        </div>
    )
}