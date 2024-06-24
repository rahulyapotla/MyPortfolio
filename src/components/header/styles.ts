import styled from "styled-components/macro";

export const headerHeight = "70";

export const footerHeight = "50";

export const Styles = styled.header`
    background-color: ${(props) => props.theme.headerColor};
    display: flex;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 10;
    max-width: 100%;
    height: ${headerHeight}px;
    overflow-x: auto;
    overflow-y: hidden;
    color: white;
    transition: all 1s ease-in-out;

    .title {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;

        .main-name {
            margin-right: 10px;
        }
    }

    .hamburger {
        display: none;
    }

    @media (max-width: 750px) {
        justify-content: space-between;

        .hamburger {
            padding: 0 20px;
            cursor: pointer;
            display: inline;
            margin: auto;

            .bar1,
            .bar2,
            .bar3 {
                width: 35px;
                height: 5px;
                background-color: ${(props) => props.theme.primaryColor};
                margin: 6px 0;
                transition: 0.4s;
            }
        }

        .change .bar1 {
            -webkit-transform: rotate(-45deg) translate(-9px, 6px);
            transform: rotate(-45deg) translate(-9px, 6px);
        }

        .change .bar2 {
            opacity: 0;
        }

        .change .bar3 {
            -webkit-transform: rotate(45deg) translate(-8px, -8px);
            transform: rotate(45deg) translate(-8px, -8px);
        }

        .nav-links {
            a {
                display: none;
            }
        }
    }

    a {
        margin: 0 20px;
        text-decoration: none;
        justify-content: center;
        display: flex;
        align-items: center;
        padding: 20px 0;
        color: white;
    }
`;

export const MobileHeaderStyles = styled.div`
    position: fixed;
    height: 100%;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .each-link {
        margin: 20px 0;
        font-size: 25px;
    }
`;
