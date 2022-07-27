import styled from "styled-components";

export const aboutWrapper = styled.section`
    position: relative;
    margin-top: 5rem;

    @media (min-width: 1200px){
        max-width: 1200px;
        margin: auto;
        margin-top: 5rem;
    }    
`

export const horizontalPadding = styled.div`
    padding-right: 1rem;
    padding-left: 1rem;
`

export const linkBtn = styled.div`
    a {
        display: flex;
        gap: 1rem;
        text-decoration-color: #00adf2;
    }

    p {
        color: #00adf2;
    }
`;

export const aboutGrid = styled.div`
    @media (min-width: 1200px){
        display: grid;
        grid-template-columns: repeat(2,1fr);
        align-items: center;
        gap: 1rem;
    }
`