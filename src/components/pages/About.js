import React from 'react';
import './Start.css';
import Slider from '../Items/Slider';
import Profile from '../Items/Profile';

import Gabel from '../Items/img/Gabel.jpeg';
import Jack from '../Items/img/Jack.png';
import Tucker from '../Items/img/Tucker.jpg';
import Los from '../Items/img/Los.png';
import Cole from '../Items/img/Cole.png';
import Than from '../Items/img/Than.jpg';

export default function About() {
    return (
        <div className="Pre-Start">
            <Slider text="Meet the people behind SmartEatz" />
            <div className="page-shell">
                <div className="section-header">
                    <div>
                        <p className="pill subtle">Our story</p>
                        <h2>The humans crafting your nutrition experience</h2>
                        <p className="lede">
                            We combine engineering, design, and wellness expertise to build a product that
                            feels premium and practical. Hover over each card to learn more.
                        </p>
                    </div>
                    <div className="highlight-box narrow">
                        <p className="microtext">What we value</p>
                        <h3>Practical guidance, crafted with empathy.</h3>
                        <p className="lede">
                            Clear, accessible nutrition recommendations that fit real lives—not crash diets.
                        </p>
                    </div>
                </div>
                <div className="team-grid">
                    <Profile image={Gabel} name="Jeremiah Gabel" role="Lead Developer" text="Hello, my name is Jeremiah Gabel, I'm the architect of this project. I'm currently a senior at CSU majoring in software engineering, I also work as a software developer for the USDA. I have a deep passion for maintaining a healthy lifestyle, and I believe this tool could be extremely beneficial to building a healthy diet." />
                    <Profile image={Jack} name="Jack Mullins" role="Coordinator" text="My name is Jack Mullins. I am a student from CSU who is studying Business Finance and Computer Information Systems. I joined the SmartEatz team to learn and assist with systems and User Interface of a website. I am excited to also learn how to eat healthier so I can live a happy healthy life!" />
                    <Profile image={Tucker} name="Tucker Hehn" role="Coordinator" text="Hi, my name is Tucker Hehn. I'm currently a CSU Business major with an Information Systems concentration. I'm helping with the research and presentation of SmartEatz. I'm excited to see how we can develop this site for the betterment of people's diets and all around well-being." />
                    <Profile image={Los} name="Autumn Los" role="Coordinator" text="My name is Autumn Los and I am a senior at Colorado State University pursuing a Major in Business Administration with a dual concentration in Marketing and Computer Information Systems. As a dedicated member of the SmartEatz team, I thrive on the opportunity to make a positive impact in people's lives." />
                    <Profile image={Cole} name="Cole Brewster" role="Coordinator" text="My name is Cole Brewster and I'm a senior at Colorado State University studying Business Administration with a focus in Computer Information Systems. As a member of SmartEatz, I focus on making sure users can achieve any health goal they desire with ease." />
                    <Profile image={Than} name="Than Phihung" role="Coordinator" text="My name is Phihung Than. I'm a junior concentrating in CIS. I love being in the outdoors and spending time being active. One of my favorite sports to play is basketball. I'm also one of the team members of SmartEatz." />
                </div>
            </div>
        </div>
    );
}
