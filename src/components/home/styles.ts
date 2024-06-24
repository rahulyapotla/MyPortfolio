import styled from "styled-components/macro";



export const Styles = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-repeat: no-repeat;
    margin: 0 5rem;

    .name {
        font-size: xx-large;
        color: #79e6e6;
        font-weight: 700;
    }

    .content {
        margin-left: 2rem;
        font-weight: lighter;
        font-size: 1.2rem;
    }
    

    @keyframes caret {
        0%, 100% {
          opacity: 0;
        }
        50% {
          opacity: 1;
        }
    }
      
    .language::after {
        content: "  |";
        position: absolute;
        animation: caret infinite;
        animation-duration: 1s;
        animation-timing-function: steps(1, end);
    }

    .about-me {

        .languages {
            
            @media (max-width: 1000px) {
                font-size: 2vw;
            }

            @media (max-width: 600px) {
                font-size: 3vw;
            }

            font-size: 1.5vw;
            font-weight: 500;

            .im {
                color: white;
                margin-right: 10px;
            }

            .language {
                color: ${(props) => props.theme.primaryColor};
                min-height: 40px;
            }
        }

        .name {
            @media (max-width: 1000px) {
                
            }

            @media (max-width: 600px) {
                
            }
            
            color: ${(props) => props.theme.primaryColor};
            font-size: xx-large;
            display: flex;
            justify-content: center;
        }

        img.profile-image {
            display: block;
            margin: auto;
            height: 20rem;
            width: 20rem;
            border-radius: 50%;
            justify-content: center;
            align-items: end;
        }
    }
`;
