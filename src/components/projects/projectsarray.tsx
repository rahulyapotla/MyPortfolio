import React, { FunctionComponent, SyntheticEvent } from "react";
import { useHistory } from "react-router-dom";
import { ProjectStyles } from "./styles";

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
    github?: string;
}

export const projects = {
    REACT: [
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

const ProjectsArray: FunctionComponent<{ name: string }> = ({ name }) => {
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

    const history = useHistory();

    const goToProject = (e: SyntheticEvent<HTMLDivElement>) => {
        history.push(`/projects/${e.currentTarget.dataset.type}/${e.currentTarget.dataset.name}`);
    };

    return (
        <ProjectStyles className="projects">
            {res.map((project) => (
                <div
                    key={project.name}
                    className="project center-items"
                    data-name={project.name}
                    data-type={project.type}
                    onClick={goToProject}
                >
                    <div className="img" style={{ backgroundImage: `url(${project.image})` }} />
                    <div className="description">{project.displayName}</div>
                </div>
            ))}
        </ProjectStyles>
    );
};

export default ProjectsArray;
