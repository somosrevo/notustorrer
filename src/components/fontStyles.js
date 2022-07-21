import styled from "styled-components";

export const h1 = styled.h1`
    font-size: ${props => props.fontSize || "2.5em"};
    font-weight: ${props => props.weight || "600"};
    color: ${props => props.color || "#444"};
    text-align: ${props => props.textAlign || "left"};

    span{
        color: #FC943B;
    }
`