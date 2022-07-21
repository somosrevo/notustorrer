import styled from "styled-components";

export const imgTransparent = styled.div`
    position: absolute;
    top: ${props => props.top || "0" };
    left: ${props => props.left || "0" };
    right: ${props => props.right || "0" };
    bottom: ${props => props.bottom  || "0"};
    width: ${props => props.width || "100%"};
    height: ${props => props.height || "100%"};
`