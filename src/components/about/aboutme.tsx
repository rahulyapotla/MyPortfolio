import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";

const AboutMe: FunctionComponent = () => (
    <div className="aboutme grid-item">
        
        <div className="name">Let's build something better.</div>
        <br />
        <div>
            With more than 3+ years of experience building complex interfaces, I'm happy to deliver anything from single-page apps to scaleable 
            design systems. I combine nuanced timing and motion with a deep understanding of browser rendering to deliver logical interactions that 
            are both full of character and outrageously smooth. Beyond front-end development, I am passionate about API and database development, 
            currently expanding my skills in JavaScript, Node.js, React, Java, Python, and Spring Boot. Recently awarded the PearlHacks Winner accolade for <a href="https://devpost.com/software/publiceye-8b9qew" target="_blank">PublicEye</a>, 
            a groundbreaking project enhancing civic engagement.
        </div>
        <br />
        <div>
        All that said, if you are looking for help building something that promotes sustainability, diversity, 
        or generally aims to make a positive impact, then let’s talk.
        </div>
        <br />
        <div>
            Check few of my Projects <Link to="/projects/">here</Link>.
        </div>
    </div>
);

export default AboutMe;
