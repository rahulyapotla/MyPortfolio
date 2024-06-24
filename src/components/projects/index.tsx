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
            {/* <div className="filters d-flex overflow-auto">
                {technologies.current.map((technology: string) => {
                    const className = technology === selected ? "active" : "";
                    return (
                        <div
                            key={technology}
                            className={`center-items each-filter ${className}`}
                            role="img"
                            onClick={() => {
                                toggleSelected(technology);
                            }}
                            // @ts-ignore
                            onKeyDown={(e) => handleClick(e, technology)}
                        >
                            {technology}
                        </div>
                    );
                })}
            </div> */}
            <LinearProjectsArray name={selected} />
        </Styles>
    );
};

export default Projects;
