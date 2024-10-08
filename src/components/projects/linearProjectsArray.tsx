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
                            In my role as a Teaching Assistant for a Software Engineering course, I identified a need for a more engaging way to explain sorting algorithms. 
                            To address this, I built a sorting algorithm visualizer using React and CSS animations. 
                        </li>
                        <li>
                            This interactive tool allows students to observe step-by-step how algorithms like Merge Sort rearrange data in real-time. 
                            By visualizing the mechanics and efficiency of different sorting algorithms, 
                            the tool enhances student understanding of sorting logic and algorithmic complexity in a clear and engaging way.
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
            name: "pantry-tracker",
            displayName: "Pantry Pilot",
            technologies: ["Next JS"],
            description: `<div>
                    <div style="font-weight: bold">
                        Features
                    </div>
                    <ul>
                        <li>
                           Developed a Pantry Tracking App using Next.js and Firebase, allowing users to add and track their pantry items with real-time updates.
                        </li>
                        <li>
                            Integrated Firebase Firestore for storing and managing pantry data, and Firebase Authentication for user login and authentication.
                            Deployed the app on Vercel, ensuring seamless continuous deployment and high performance.
                            Utilized Next.js dynamic routing for a smooth user experience and integrated real-time data synchronization between the app and database.
                            Implemented user-friendly CRUD functionality for adding, updating, and removing pantry items. 
                        </li>
                    </ul>
                </div>`,
            allImages: [dummyImage, dummyImage, dummyImage],
            //demoURL: "https://github.com/rahulyapotla/pantry-tracker-app",
            github: "https://github.com/rahulyapotla/pantry-tracker-app",
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
                            This app has been built with React and Material UI, offers a user-friendly experience that lets you breeze through the booking process. 
                            You browse the menu with ease, thanks to React's efficient functionality, and reserve the perfect table with just a few taps on your phone.
                        </li>
                        <li>
                            The beautiful Material UI design makes everything visually appealing. 
                            When you arrive at the restaurant, your table is ready, and you can even use the app to order food directly, avoiding any unnecessary wait.
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
