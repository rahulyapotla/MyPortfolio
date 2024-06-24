import React, {FunctionComponent, useRef} from "react";
import SkillBar from "./skillBar";

// @ts-ignore
import hackathon from "../../static/hackathon.jpeg";

// @ts-ignore
import PH24My from "../../static/PH24My.jpeg";

const Skills: FunctionComponent = () => {
    const json = useRef([
        {
            name: "Python",
            percentage: 90
        },
        {
            name: "Javascript",
            percentage: 90
        },
        {
            name: "Java",
            percentage: 0
        },
        {
            name: "Typescript",
            percentage: 70
        },
        {
            name: "Django",
            percentage: 80
        },
        {
            name: "Flask",
            percentage: 70
        },
        {
            name: "NodeJS",
            percentage: 90
        },
        {
            name: "SpringBoot",
            percentage: 70
        },
        {
            name: "React",
            percentage: 90
        },
        {
            name: "React Native",
            percentage: 75
        },
        {
            name: "MySQL",
            percentage: 80
        },
        {
            name: "PostgreSQL",
            percentage: 85
        },
        {
            name: "DynamoDB",
            percentage: 85
        },
        {
            name: "AWS",
            percentage: 80
        },
        {
            name: "Docker",
            percentage: 70
        }
    ]);

    return (
        <div className="skills grid-item">
            <div className="title"></div>
            
            <div className="d-flex">
                <img
                    alt="Rahulya Potla"
                    className="profile-image"
                    src={hackathon}
                />
                 <img
                    alt="Rahulya Potla"
                    className="profile-image"
                    src={PH24My}
                />
                
            </div>
        </div>
    );
};

export default Skills;
