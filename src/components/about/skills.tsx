import React, {FunctionComponent} from "react";

// @ts-ignore
import hackathon from "../../static/hackathon.jpeg";

// @ts-ignore
import PH24My from "../../static/PH24My.jpeg";

const Skills: FunctionComponent = () => {
   

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
