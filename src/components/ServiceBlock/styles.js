import styled from "styled-components";

export const serviceBlock = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 2rem;
`;

export const icon = styled.div`
    background: #00adf2;
    box-shadow: 0px 4px 12px -4px rgba(22, 34, 51, 0.12), 0px 16px 32px rgba(22, 34, 51, 0.16);
    border-radius: 16px;
    display: flex;
    padding: 0.5rem;
    margin-bottom: 1rem;
`;

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
