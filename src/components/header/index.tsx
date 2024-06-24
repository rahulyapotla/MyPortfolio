import React, { FunctionComponent } from "react";
import { NavLink, Link } from "react-router-dom";
import { Styles } from "./styles";

export const links = [
    {
        name: "HOME",
        to: "/home/"
    },
    {
        name: "ABOUT",
        to: "/about/"
    },
    {
        name: "PROJECTS",
        to: "/projects/"
    },
    {
        name: "RESUME",
        to: "/resume/"
    },
    {
        name: "CONTACT",
        to: "/contact/"
    }
];

export const toggleHamburger = () => {
    const hamburger = document.querySelector(".hamburger");
    const header = document.querySelector(".mobile-header");
    const main = document.querySelector("main");

    if (header && main && hamburger) {
        hamburger.classList.toggle("change");
        header.classList.toggle("z-index-1");
        main.classList.toggle("main-filter");
    }
};

const Header: FunctionComponent = () => (
    <Styles>
        <div className="title">
            <Link to="/">
                <div className="main-name">Rahulya</div>
                <div className="sur-name">Potla</div>
            </Link>
        </div>
        <nav className="d-flex nav-links router-links">
            {links.map((link) => (
                <NavLink key={link.to} activeClassName="active" to={link.to}>
                    {link.name}
                </NavLink>
            ))}
            <div className="hamburger" onClick={toggleHamburger}>
                <div className="bar1" />
                <div className="bar2" />
                <div className="bar3" />
            </div>
        </nav>
    </Styles>
);

export default Header;
