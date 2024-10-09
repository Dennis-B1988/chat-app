import styled from "styled-components";

export const PolicyContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin-top: 60px;
    background-color: white;
    z-index: 999;
    overflow-y: scroll;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;

    > h4, p {
        padding-top: 10px;
        padding-bottom: 10px;
    }
`;