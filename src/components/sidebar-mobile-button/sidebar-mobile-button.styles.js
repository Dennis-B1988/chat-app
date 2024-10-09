import styled from "styled-components";

export const SidebarMobileButtonContainer = styled.div`

    display: none;
    align-items: center;
    justify-content: center;
    height: 45px;
    width: 45px;
    border-radius: 50%;
    position: absolute;
    bottom: 35px;
    right: 20px;
    background-color: var(--slack-color);
    color: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    cursor: pointer;

    @media (max-width: 767px) {
        display: flex;
    }
`;