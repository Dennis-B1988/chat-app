import { Avatar } from '@mui/material';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    background-color: var(--slack-color);
    color: white;
`;

export const HeaderLeft = styled.div`
    flex: 0.3;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 20px;

    > .MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 30px;
    }
`;

export const HeaderSearch = styled.div`
    flex: 0.4;
    opacity: 1;
    border-radius: 6px;
    background-color: #421f44;
    text-align: center;
    display: flex;
    padding: 0 50px;
    color: gray;
    border: 1px gray solid;

    > input {
        background-color: transparent;  
        border: none;
        text-align: center;
        min-width: 30vw;
        outline: 0;
        color: white;
    }

    @media (max-width: 767px) {
        padding: 0 15px;
    }
`;

export const HeaderRight = styled.div`
    flex: 0.3;
    display: flex;
    align-items: flex-end;
    
    > .MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 20px;
        cursor: pointer;
    }
`;

export const HeaderAvatar = styled(Avatar)`
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`;