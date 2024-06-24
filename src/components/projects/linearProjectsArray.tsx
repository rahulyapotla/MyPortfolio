import React, { FunctionComponent } from "react";
import { LinearProjectStyles } from "./styles";
import { Button } from "../Button";

// @ts-ignore
import dummyImage from "../../static/dummyImage.svg";

interface ProjectInterface {
    name: string;
    displayName: string;
    technologies: Array<string>;
    type: string;
    image?: string;
    allImages?: Array<string>;
    demoURL?: string;
    github: string;
    description: string;
}

export const projects = {
    
    "REACT": [
        {
            image: dummyImage,
            name: "publiceye",
            displayName: "Public Eye",
            technologies: ["React JS"],
            description: `<div>
                    <div style="font-weight: bold">
                        Features
                    </div>
                    <ul>
                        <li>
                            PublicEye leverages React for its frontend, providing a seamless and intuitive user experience. 
                            Machine learning (ML), using Python and AI algorithms, drives image processing and issue categorization.
                        </li>
                        <li>
                            PublicEye streamlines civic issue reporting by enabling users to snap and report problems like damaged roads or malfunctioning streetlights
                        </li>
                        <li>
                            PublicEye has been recognized in hackathons like Pearl Hacks as a winner,
                            highlighting its innovative approach to automating civic issue reporting.
                        </li>
                    </ul>
                </div>`,
            allImages: [dummyImage, dummyImage, dummyImage],
            demoURL: "https://devpost.com/software/publiceye-8b9qew",
            github: "https://github.com/shrutisuryawanshi29/PublicEye",
            type: "REACT"
        },
        {
            image: dummyImage,
            name: "sorting-visualizer",
            displayName: "Sorting Visualizer",
            technologies: ["React JS"],
            description: `<div>
                    <div style="font-weight: bold">
                        Features
                    </div>
                    <ul>
                        <li>
                            Users can manually select a algorithm from the given list of algorithms.
                        </li>
                        <li>
                            We can even add custom data and visualize the respective alogorithm.
                        </li>
                        <li>
                            We can intialize the array either in increasing, decreasing, random (or) almost sorted manner.
                        </li>
                    </ul>
                </div>`,
            allImages: [dummyImage, dummyImage, dummyImage],
            demoURL: " https://rahulyapotla.github.io/SortingVisualizer/",
            github: "https://github.com/rahulyapotla/SortingVisualizer",
            type: "REACT"
        },
        {
            image: dummyImage,
            name: "table_booking_app",
            displayName: "Table Booking App",
            technologies: ["React JS"],
            description: `<div>
                    <div style="font-weight: bold">
                        Features
                    </div>
                    <ul>
                        <li>
                            Users can manually select a algorithm from the given list of algorithms.
                        </li>
                        <li>
                            We can even add custom data and visualize the respective alogorithm.
                        </li>
                        <li>
                            We can intialize the array either in increasing, decreasing, random (or) almost sorted manner.
                        </li>
                    </ul>
                </div>`,
            allImages: [dummyImage, dummyImage, dummyImage],
            github: " https://github.com/rahulyapotla/restaurant-app",
            type: "REACT"
        }
    ],
    JAVASCRIPT: [
        {
            image: dummyImage,
            name: "snake-game",
            displayName: "Snake Game",
            technologies: ["Javascript"],
            allImages: [dummyImage, dummyImage],
            description:
                "This is a simple snake game written in vanilla javascript throight ht eimplementation of a Linked List.",
            demoURL: " https://rahulyapotla.github.io/snakeGame/",
            github: "https://github.com/rahulyapotla/snakeGame",
            type: "JAVASCRIPT"
        }
    ],
    PYTHON: [
        {
            image: dummyImage,
            name: "ds-algo",
            displayName: "Data Structures and Algorithms",
            technologies: ["Python"],
            description:
                "In this projects I have implemented various data structures and algorithms in python.",
            allImages: [dummyImage, dummyImage],
            github: "https://github.com/uppeabhishek/Data-Structures-and-Algorithms",
            type: "PYTHON"
        }
    ]
    
};

const LinearProjectsArray: FunctionComponent<{ name: string }> = ({ name }) => {
    let res: Array<ProjectInterface> = [];

    const lowerCaseName = name.toLowerCase();

    if (lowerCaseName === "all") {
        Object.values(projects).forEach((project) => {
            res = res.concat(project);
        });
    } else {
        // @ts-ignore
        res = res.concat(projects[name]);
    }

    return (
        <LinearProjectStyles>
            {res.map((project) => (
                <div
                    key={project.name}
                    className="project"
                    data-name={project.name}
                    data-type={project.type}
                >
                    <div className="title">
                        <a href={project.github} rel="noopener noreferrer" target="_blank">
                            {project.displayName}
                        </a>
                    </div>
                    <div className="description">
                        <div dangerouslySetInnerHTML={{ __html: project.description }} />
                    </div>
                    <div className="links">
                        {project.demoURL ? (
                            <a href={project.demoURL} rel="noopener noreferrer" target="_blank">
                                <Button className="demo">Demo URL</Button>
                            </a>
                        ) : (
                            ""
                        )}
                        {project.github ? (
                            <a href={project.github} rel="noopener noreferrer" target="_blank">
                                <Button className="demo">Github URL</Button>
                            </a>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            ))}
        </LinearProjectStyles>
    );
};

export default LinearProjectsArray;
