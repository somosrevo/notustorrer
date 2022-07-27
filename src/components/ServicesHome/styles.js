import styled from "styled-components";

export const servicesWrapper = styled.section`
    position: relative;
    padding-top: 5rem;

    @media (min-width: 1200px){
        max-width: 1200px;
        margin: auto;
    }
`

export const servicesGrid = styled.div`
    @media (min-width: 1200px){
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
    }
`

export const horizontalPadding = styled.div`
    padding-right: 1rem;
    padding-left: 1rem;
`