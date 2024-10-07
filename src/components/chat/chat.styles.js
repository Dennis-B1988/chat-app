import styled from "styled-components";


export const ChatContainer = styled.div`
    flex: 0.7;
    flex-grow: 1;
    overflow-y: scroll;
    margin-top: 60px;

    ::-webkit-scrollbar {
        display: none;
    }

    -ms-overflow-style: none;
    scrollbar-width: none;
`;

export const ChatHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid lightgray;
`;

export const ChatHeaderLeft = styled.div`
    display: flex;
    align-items: center;

    > h4 {
        display: flex;
        text-transform: lowercase;
        margin-right: 10px;
    }

    > .MuiSvgIcon-root {
        margin-left: auto;
        font-size: 18px;
    }
`;

export const ChatHeaderRight = styled.div`
    > p {
        display: flex;
        align-items: center;
        color: gray;
    }

    > p > .MuiSvgIcon-root {
        margin-right: 5px !important;
        font-size: 16px;
    }
`;

export const ChatMessages = styled.div`

`;

export const ChatBottom = styled.div`
    padding-bottom: 200px;
`;