import styled from "styled-components";

export const serviceBox = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;

    .gatsby-image-wrapper {
        margin-bottom: 1rem;
        border-radius: 1rem;
        max-height: 300px;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    }

    @media (min-width: 1200px) {
        flex-direction: row;
        margin-bottom: 2rem;
        align-items: center;
        gap: 2rem;

        div {
            flex: 1;
        }

        &:nth-child(odd) {
            flex-direction: row-reverse;
        }
    }
`;
