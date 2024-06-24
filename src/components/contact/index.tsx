import React, { FunctionComponent } from "react";
import { Loader } from "../loader";

const Contact: FunctionComponent = () => (
    <iframe
        frameBorder="0"
        src="https://docs.google.com/forms/d/e/1FAIpQLScBFaHs4hr7iYauxPsQQt99qFLSQofZvp08agHQgy109kuoNw/viewform"
        style={{
            width: "100%",
            height: "100%"
        }}
        title="contactInfo"
    >
        <Loader />
    </iframe>
);

export default Contact;
