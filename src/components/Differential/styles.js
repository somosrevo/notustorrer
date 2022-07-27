import styled from "styled-components";

export const differentialWrapper = styled.section`
    position: relative;
    margin-top: 5rem;

    @media (min-width: 1200px){
        max-width: 1200px;
        margin: auto;
        margin-top: 5rem;
    }
`;

export const swiperWrapper = styled.div`
    .swiper {
        padding-top: 2rem;
        padding-bottom: 2rem;
        padding-right: 1rem;
    }
    .swiper-slide {
        width: auto;
        padding-right: 3rem;
    }
`;
