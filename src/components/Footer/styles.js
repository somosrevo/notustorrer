import styled from "styled-components";

export const footerWrapper = styled.section`
    background: #444444;
    margin-top: 3rem;
    padding: 3rem 1rem;

    @media (min-width: 1200px) {
        h3 {
            max-width: 1200px;
            margin: auto;
            margin-bottom: 2rem;
        }
    }
`;

export const footerLogo = styled.div`
    margin-bottom: 2rem;

    @media (min-width: 1200px) {
        max-width: 1200px;
        margin: 0 auto 2rem;
    }
`;

export const iconsWrapper = styled.div`
    display: flex;
    gap: 2rem;
`;

export const footerGrid = styled.div`
    @media (min-width: 1200px) {
        max-width: 1200px;
        margin: auto;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
    }
`;
