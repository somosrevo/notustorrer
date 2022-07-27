import styled from "styled-components";

export const aboutTextWrapper = styled.section`
    position: relative;
    padding: 1rem;
    margin-top: 10rem;

    @media (min-width: 1200px){
        max-width: 1200px;
        margin: auto;
        margin-top: 10rem;
    }
`

export const aboutGrid = styled.div`
    @media (min-width: 1200px){
        display: grid;
        grid-template-columns: repeat(2,1fr);
        align-items: center;
        gap: 1rem;
    }
`