import styled from "styled-components/macro";

export const Styles = styled.div`
    position: absolute;
    top: 20px;
    text-align: center;
    width: 100%;
    font-size: 3em;
    color: ${(props) => props.theme.primaryColor};
`;
