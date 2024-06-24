import React, {FunctionComponent, useRef} from "react";


// @ts-ignore
import githubOriginal from "../../static/github_original.svg";


// @ts-ignore
import linkedinOriginal from "../../static/linkedin_original.svg";

// @ts-ignore
import leetcodeOriginal from "../../static/leetcode_original.png";

import {Styles} from "./styles";

const SocialLinks: FunctionComponent = () => {
    const width = useRef(30);
    const height = useRef(30);

    /*
     * Const changeMouseOverImage = (e: SyntheticEvent<HTMLImageElement>) => {
     *     const { name } = e.currentTarget.dataset;
     */

    /*
     *     If (name === "github") {
     *         e.currentTarget.src = githubOriginal;
     *     } else if (name === "facebook") {
     *         e.currentTarget.src = facebookOriginal;
     *     } else if (name === "twitter") {
     *         e.currentTarget.src = twitterOriginal;
     *     } else {
     *         e.currentTarget.src = linkedinOriginal;
     *     }
     * };
     */

    /*
     * Const changeMouseOutImage = (e: SyntheticEvent<HTMLImageElement>) => {
     *     const { name } = e.currentTarget.dataset;
     */

    /*
     *     If (name === "github") {
     *         e.currentTarget.src = github;
     *     } else if (name === "facebook") {
     *         e.currentTarget.src = facebook;
     *     } else if (name === "twitter") {
     *         e.currentTarget.src = twitter;
     *     } else {
     *         e.currentTarget.src = linkedin;
     *     }
     * };
     */

    const socialNetworks = [
        {
            alt: "Github",
            dataName: "github",
            href: "https://github.com/rahulyapotla/",
            src: githubOriginal
        },
        {
            alt: "Linked In",
            dataName: "linkedin",
            href: "https://www.linkedin.com/in/rahulya-potla/",
            src: linkedinOriginal
        },
        {
            alt: "Leetcode",
            dataName: "leetcode",
            href: "https://leetcode.com/rahulyapotla/",
            src: leetcodeOriginal
        }
    ];

    return (
        <Styles>
            {socialNetworks.map((network) => (
                <a
                    key={network.dataName}
                    href={network.href}
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <img
                        alt={network.alt}
                        data-name={network.dataName}
                        height={height.current}
                        src={network.src}
                        width={width.current}
                    />
                </a>
            ))}
        </Styles>
    );
};

export default SocialLinks;
