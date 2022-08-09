import styled from "styled-components";

export const sidebarWrapper = styled.section`
    position: fixed;
    height: 100vh;
    width: 300px;
    top: 0;
    left: -300px;
    background-color: #fff;
    border-radius: 0 0.5rem 0.5rem 0;
    transform: ${(props) => (props.showSidebar ? "translateX(300px)" : "translateX(0)")};
    transition: 0.3s ease all;
    z-index: 1000;
`;

export const sidebarOverlay = styled.div`
    position: fixed;
    background-color: #00000080;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    display: ${(props) => (props.showSidebar ? "block" : "none")};
    z-index: 1000;
`;

export const closeIcon = styled.div`
    position: absolute;
    right: -50px;
    top: 40px;
    display: ${(props) => (props.showSidebar ? "block" : "none")};
`;

export const sidebarBody = styled.div`
    position: relative;
    padding: 1rem;
`;

export const logoSidebar = styled.div`
    margin-bottom: 2rem;
`;

export const sidebarLink = styled.div`
    background-color: #fff;
    border-radius: .5rem;
    padding: .5em 1em;
    margin-bottom: 1rem;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

    a {
        text-decoration: none;
        display: flex;
        gap: 1rem;
        align-items: center;
    }
`;

export const lngWrapper = styled.div`
    margin-top: 3rem;
`

export const selectLng = styled.select`
    border: none;
    border-radius: 5px;
    background: #0000000d;
    width: 100%;
    padding: 1rem 1rem;
`