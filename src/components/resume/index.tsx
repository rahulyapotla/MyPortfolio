import React, { FunctionComponent } from "react";

// @ts-ignore
import Resume from "../../static/resume.pdf"
const ResumePage: FunctionComponent = () => (
    <>
        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
        <iframe className="w-100 h-100" src={Resume} style={{ borderWidth: 0 }} title="Resume">
            Resume
        </iframe>
    </>
);

export default ResumePage;
