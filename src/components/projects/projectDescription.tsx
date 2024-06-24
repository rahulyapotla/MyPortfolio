import React, { FunctionComponent } from "react";
import { useParams, useHistory } from "react-router-dom";
import Slider from "react-slick";
import { Button } from "../Button";
import { ProjectDescriptionStyles } from "./styles";
import { projects } from "./projectsarray";

const ProjectDescription: FunctionComponent = () => {
    //@ts-ignore
    const { name, type } = useParams();
    const history = useHistory();

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true
    };

    const goBack = () => {
        history.goBack();
    };

    console.log(projects, type);

    // @ts-ignore
    const currentProject = projects[type].filter((ele) => ele.name === name.toLowerCase());

    return (
        <ProjectDescriptionStyles>
            <div className="main-body">
                <div className="header d-flex">
                    <Button className="goback" onClick={goBack}>
                        Go Back
                    </Button>
                    <div className="title">{currentProject[0].displayName}</div>
                    <div className="project-links">
                        {currentProject[0].demoURL ? (
                            <a
                                href={currentProject[0].demoURL}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <Button className="demo">Demo URL</Button>
                            </a>
                        ) : (
                            <></>
                        )}
                        {currentProject[0].github ? (
                            <a
                                href={currentProject[0].github}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <Button className="github">View on github</Button>
                            </a>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
                <div className="technologies">
                    <div className="description">
                        <div dangerouslySetInnerHTML={{ __html: currentProject[0].description }} />
                    </div>
                    {currentProject[0].allImages && (
                        <div className="slider">
                            <Slider {...settings}>
                                {currentProject[0].allImages.map((image: string, index: number) => (
                                    <img key={index} alt="project" height={400} src={image} />
                                ))}
                            </Slider>
                        </div>
                    )}
                </div>
            </div>
        </ProjectDescriptionStyles>
    );
};

export default ProjectDescription;
