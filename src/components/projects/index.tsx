import React, { FunctionComponent, useRef, useState } from "react";
import { Styles } from "./styles";
import LinearProjectsArray from "./linearProjectsArray";

const Projects: FunctionComponent = () => {
    const technologies = useRef(["All"]);
    const [selected, toggleSelected] = useState(technologies.current[0]);

    const handleClick = (e: KeyboardEvent, technology: string) => {
        if (e.key === "Enter") {
            toggleSelected(technology);
        }
    };

    return (
        <Styles>
            <div className="page-title">PROJECTS</div>
            
            <LinearProjectsArray name={selected} />
        </Styles>
    );
};

export default Projects;
