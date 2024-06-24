import React, { FunctionComponent, useEffect, useRef } from "react";
import { Styles } from "./styles";
import { Link } from "react-router-dom";
import { Button } from "../Button"

// @ts-ignore
import profile from "../../static/profile.jpeg";
import AboutMe from "../about/aboutme"


const Home: FunctionComponent = () => {
    const languages = [
        "SOFTWARE DEVELOPER",
        "WEB DEVELOPER",
        "PEARL HACKS WINNER",
        "AND MORE.."
    ];
   


    const languageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const timeout = 150;
        let index = 0;
        let i = 0;
        let goForward = true;

        function typeLetters() {
            if (goForward) {
                if (i < languages[index].length && languageRef.current) {
                    languageRef.current.innerHTML += languages[index].charAt(i++);
                } else {
                    setTimeout(() => {
                        goForward = false;
                    }, timeout * 10);
                }
            } else if (i > -1 && languageRef.current) {
                languageRef.current.innerHTML = languageRef.current.innerHTML.slice(0, -1);
                i--;
            } else {
                i = 0;
                if (index < languages.length - 1) {
                    index += 1;
                } else {
                    index = 0;
                }
                goForward = true;
            }
        }

        if (languageRef.current && languages.length) {
            setInterval(typeLetters, timeout);
        }
    }, []);

    return (
        <Styles>
            <div className="about-me">
                <img
                    alt="Rahulya Potla"
                    className="profile-image"
                    src={profile}
                />
                <div className="name">Rahulya Potla</div>
                <div className="languages center-items flex-col">
                    <div ref={languageRef} className="language" />
                </div>
            </div>
            <div className="content">
                <div className="name">Hi! My name is Rahulya</div>
                <br />
                <div>
                I'm passionately dedicated to the journey of lifelong learning, and I thrive as a Full Stack Developer 
                specializing in 
                JavaScript, React, Java and Python and the dynamic world of web development. 
                My work is driven by a love for creativity, problem-solving, and the ever-evolving tech landscape. 
                Beyond coding, I find joy in exploring literature, staying active, and painting. 
                My aim is to solve real world problems using the applications of Computer Science.
                </div>
                <br />
                <div>
                Join me as I navigate through the exciting realms of digital innovation and continuous growth.

                </div>
                <br />
                <div>
                    Check few of my Projects <Link to="/projects/">here</Link>.
                </div>
                <br />
                <div>
                <Link to="/contact/"><Button className="demo">Get in Touch</Button></Link> 
                </div>
            </div>
            
        </Styles>
    );
};

export default Home;
