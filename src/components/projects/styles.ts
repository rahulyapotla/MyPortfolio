import styled from "styled-components/macro";

export const Styles = styled.div`
    flex: 1;
    
    overflow: auto;
    display: flex;
    flex-direction: column;
    padding: 40px 15% 0 15%;

    @media (max-width: 800px) {
        max-width: 90%;
        padding: 40px 5% 0 5%;
    }

    .filters {
        justify-content: space-between;
        margin-bottom: 40px;

        .each-filter {
            font-size: 16px;
            width: 100%;
            height: 40px;
            border: 1px solid transparent;
            border-radius: 4px;
            padding: 5px 10px;
            font-size: 16px;
            cursor: pointer;
        }

        .each-filter.active {
            font-weight: bold;
            color: white;
            background-color: ${(props) => props.theme.primaryColor};
        }
    }
`;

export const ProjectStyles = styled.div`
    display: flex;
    flex-wrap: wrap;

    .project {
        transform: rotateY(0deg);
        transform-style: preserve-3d;
        transition-property: transform;
        transition-duration: 1s;
        cursor: pointer;
        height: 200px;
        border: 1px solid grey;
        flex: 1 0 33%;

        .img {
            width: 100%;
            height: 100%;
            background-repeat: no-repeat;
            background-size: 100% 100%;
        }
    }

    .project:hover {
        opacity: 0.7;
    }
`;

export const ProjectDescriptionStyles = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;

    .goback {
        width: 100px;
        left: 10px;
    }

    .main-body {
        color: white;
        a {
            cursor: pointer;
        }

        .header {
            margin-bottom: 50px;
            justify-content: space-between;

            .title {
                font-size: 3rem;
            }

            .project-links {
                display: flex;
                justify-content: space-between;

                a:not(:last-child) {
                    margin-right: 10px;
                }
            }
        }

        .technologies {
            display: flex;

            .description {
                font-size: 20px;
                width: 40%;

                li {
                    margin-bottom: 15px;
                }
            }

            .slider {
                width: 60%;
            }

            @media only screen and (max-width: 600px) {
                display: block;

                .description {
                    width: 100%;
                }

                .slider {
                    width: 100%;
                }
            }
        }
    }
`;

export const LinearProjectStyles = styled.div`
    .project {
        border: 1px solid ${(props) => props.theme.primaryColor};
        padding: 20px 10px;
        border-radius: 20px;

        margin: 20px 0;

        > * {
            margin-bottom: 10px;
        }

        .links {
            a {
                margin-right: 10px;
            }
        }

        .title {
            font-size: 20px;
            font-weight: bold;
        }

        .description {
            font-size: 18px;
        }
    }
`;
