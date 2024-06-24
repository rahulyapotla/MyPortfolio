import { headerHeight, footerHeight } from "./components/header/styles";
import styled, { createGlobalStyle } from "styled-components/macro";

export const GlobalStyle = createGlobalStyle`
    
    body {
        color: #616161;
        margin: 0;
        width: 100vw;
        height: 100vh;
        font-family: 'Roboto', sans-serif;
        animation: pulse 3s ease-in-out;

        .page-title {
            font-size: 3em;
            text-align: center;
            margin-bottom: 50px;
            color: ${(props) => props.theme.primaryColor};
        }

        .main-filter {
            filter: brightness(0.1);
        }

        .z-index-1 {
            z-index: 1;
        }

        #root {
            height: 100%;
        }

        .d-flex {
            display: flex;
        }

        .w-100 {
            width: 100%;
        }

        .h-100 {
            height: 100%;
        }

        .justify-center {
            justify-content: center;
        }

        .align-center {
            align-items: center;
        }

        .center-items {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .flex-col {
            display: flex;
            flex-direction: column;
        }

        .cursor-pointer {
            cursor: pointer;
        }

        .overflow-auto {
            overflow: auto;
        }

        .router-links {
            a {
                filter: brightness(0.6);
            }
        }

        a {
            text-decoration: none;
            color: ${(props) => props.theme.primaryColor};
        }

        a.active {
            filter: brightness(1);
            font-weight: bold;
            color: ${(props) => props.theme.primaryColor};
        }

        a:hover {
            filter: brightness(1);
            color: ${(props) => props.theme.primaryColor};
        }
    }
`;

export const Styles = styled.div`
    // overflow-x: hidden;
    display: flex;
    flex-direction: column;
    height: 100%;

    main {
        overflow-x: hidden;
        color: #dadde1;
        background-color: ${(props) => props.theme.primaryBackgroundColor};
        position: relative;
        flex: 1;
        margin-top: ${headerHeight}px;
        margin-bottom: ${footerHeight}px;
    }

    .slick-prev,
    .slick-next {
        z-index: 2;
        background-color: ${(props) => props.theme.primaryColor};
        width: 30px;
        height: 30px;
        border-radius: 10px;
    }

    .slick-prev {
        left: 0;
    }

    .slick-next {
        right: 0;
    }

    footer {
        display: flex;
        justify-content: flex-end;
        background: ${(props) => props.theme.headerColor};
        padding: 10px 0;
        height: ${footerHeight};
        position: fixed;
        bottom: 0px;
        width: 100%;
    }
`;
