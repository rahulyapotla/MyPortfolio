import styled, { keyframes } from "styled-components/macro";

export const Styles = styled.div`
    margin: 40px;

    @media (max-width: 600px) {
        margin: 20px;
    }

    .grid-container {
        display: grid;
        grid-template-columns: 50% 2fr;
        grid-gap: 30px;

        @media (max-width: 900px) {
            grid-template-columns: auto;
        }

        .title {
            color: ${(props) => props.theme.primaryColor};
            text-align: center;
            font-weight: bold;
            font-size: 24px;
            margin: 20px 0;
        }
        
        img.profile-image {
            display: block;
            margin: auto;
            height: 30rem;
            width: 20rem;
            border-radius: 10px;
            justify-content: center;
            align-items: end;
        }

        .name {
            font-size: xxx-large;
            font-weight: 500;
            color: ${(props) => props.theme.primaryColor};
        }

        
        .aboutme {
            font-size: large;
            font-weight: 200;
            .stack-skill {
                font-style: italic;
                color: ${(props) => props.theme.primaryColor};
            }
        }
    }
`;

interface SkillStyleInterface {
    width: number;
}

const widthAnimation = (width: number) => keyframes`
    0% {
        width: 0%;
    }
    100% {
        width: ${width}%;
    }
`;

export const SkillStyle = styled.div<SkillStyleInterface>`
    display: flex;
    height: 35px;
    font-weight: 900;
    color: white;
    margin: 0 0 1em 0;

    .name {
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        color:  ${(props) => props.theme.primaryBackgroundColor};
        overflow: hidden;
        text-overflow: ellipsis;
        background-color: ${(props) => props.theme.primaryColor};
        width: 30%;
    }

    .bar {
        display: flex;
        background-color: #80808038;
        width: 80%;

        .color {
            background-color: ${(props) => props.theme.primaryColor};
            animation: ${(props) => widthAnimation(props.width)} 1s ease-in-out;
            width: ${(props) => props.width}%;
            filter: brightness(75%);
            height: 100%;
        }

        .percentage {
            margin: auto;
        }
    }
}`;