import styled from "styled-components";


export const headerWrapper = styled.section`
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    padding: 1em;
    background-color: ${props => props.colorChanger ? [props.scrollPosition >= 40 ? "#444" : "transparent"] : "#444;"};
    transition: all 0.3s;
    z-index: 999;
`

export const headerBody = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 1200px){
        max-width: 1200px;
        margin: auto;
    }
`

export const toggleSidebarBtn = styled.div`
    position: relative;
    padding: .5em;
    display: flex;
    border: 1px solid #fff;
    border-radius: 8px;
`