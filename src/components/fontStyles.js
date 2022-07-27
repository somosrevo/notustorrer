import styled from "styled-components";

export const h1 = styled.h1`
    font-size: ${props => props.fontSize || "2.5em"};
    font-weight: ${props => props.weight || "600"};
    color: ${props => props.color || "#444"};
    text-align: ${props => props.textAlign || "left"};
    margin-bottom: ${props => props.mgBottom || "1rem"};

    span{
        color: #FC943B;
    }
`

export const h3 = styled.h3`
    font-size: ${props => props.fontSize || "1.7em"};
    font-weight: ${props => props.weight || "400"};
    color: ${props => props.color || "#444"};
    text-align: ${props => props.textAlign || "left"};
    margin-bottom: ${props => props.mgBottom || "1rem"};

    span{
        color: #FC943B;
    }
`

export const h5 = styled.h5`
    font-size: ${props => props.fontSize || "1.2em"};
    font-weight: ${props => props.weight || "400"};
    color: ${props => props.color || "#444"};
    text-align: ${props => props.textAlign || "left"};
    margin-bottom: ${props => props.mgBottom || "1rem"};

    span{
        color: #FC943B;
    }
`

export const p = styled.p`
    font-size: ${props => props.fontSize || "1em"};
    font-weight: ${props => props.weight || "400"};
    color: ${props => props.color || "#444"};
    text-align: ${props => props.textAlign || "left"};
    margin-bottom: ${props => props.mgBottom || "1rem"};

    span{
        color: #FC943B;
    }
`