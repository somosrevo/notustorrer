import styled from "styled-components";

export const cardWrapper = styled.div`
    position: relative;
    border-radius: 1rem;
    width: 265px;
    padding: 16rem 1rem  1rem;
    margin-right: -10px !important;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    
    a{
        text-decoration: none;
    }
`;

export const cardBg = styled.div`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    overflow: hidden;
    z-index: -1;

    .gatsby-image-wrapper{
        height: 100%;
        width: 100%;
    }
`;

export const cardPanel = styled.div`
    padding: 2rem 1rem;
    border-radius: 1rem;
    background: rgba(255, 255, 255, 0.5 );
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    min-height: 150px;
    backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
`;
export const styleIcon = styled.div`
    position: absolute;
    top: -1rem;
    right: -1rem;
    width: 40px;
    height: 37px;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    align-items: center;
    background-color: #ededed;
    border-radius: 50px;
`