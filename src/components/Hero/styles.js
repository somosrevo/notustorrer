import styled from "styled-components";

export const heroWrapper = styled.section`
    position: relative;
    height: 100vh;
    width: 100%;
`;

export const imgBackground = styled.div`
    position: absolute;
    inset: 0;

    .gatsby-image-wrapper {
        height: 100%;
    }
`;

export const heroTitle = styled.div`
    position: absolute;
    inset: 0 0 26% 0;
    display: flex;
    align-items: center;
    padding: 1rem;
    justify-content: center;

    h1 {
        text-shadow: 0px 0px 50px rgba(0, 0, 0, 0.5);
    }
`;

export const heroLogo = styled.div`
    display: none;

    @media (min-width: 1200px) {
        display: block;
        position: absolute;
        bottom: 20%;
        left: 50%;
        transform: translateX(-50%);
    }
`;