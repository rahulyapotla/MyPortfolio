import React, { FunctionComponent } from "react";
import Skills from "./skills";
import { Styles } from "./styles";
import AboutMe from "../about/aboutme"

interface pageProps {
    page?: string
}

const About: FunctionComponent = () => (
    <Styles>
        
        <div className="grid-container">
           
            <AboutMe />
            <Skills/> 
        </div>
    </Styles>
);

export default About;
