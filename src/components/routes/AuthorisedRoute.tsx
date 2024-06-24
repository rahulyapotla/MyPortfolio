/**
 * This component allows authenticated user to access the protected routes and
 * redirects the unauthenticated user to login page
 */

import React, { FunctionComponent } from "react";
import { Route, Redirect } from "react-router-dom";

interface PageProps {
    component: FunctionComponent;
    path: string;
}

function AuthorisedRoute(props: PageProps) {
    const { component, path } = props;

    if (path === "/") {
        return <Redirect to="/home/" />;
    }

    return <Route component={component} exact={true} path={path} />;
}

export default AuthorisedRoute;
