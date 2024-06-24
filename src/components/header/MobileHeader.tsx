import React, { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import { links, toggleHamburger } from "./index";
import { MobileHeaderStyles as Styles } from "./styles";

const MobileHeader: FunctionComponent = () => (
    <Styles className="mobile-header router-links">
        {links.map((link) => (
            <div className="each-link" key={link.name}>
                <NavLink activeClassName="active" to={link.to} onClick={toggleHamburger}>
                    {link.name}
                </NavLink>
            </div>
        ))}
    </Styles>
);

export default MobileHeader;
