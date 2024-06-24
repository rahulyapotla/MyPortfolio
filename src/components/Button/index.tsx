import React, { FunctionComponent, ReactNode } from "react";
import { Styles } from "./styles";

interface ButtonType {
    children: ReactNode;
    [prop: string]: any;
}
export const Button: FunctionComponent<ButtonType> = ({ children, ...rest }) => (
    <Styles type="button" {...rest}>
        {children}
    </Styles>
);
