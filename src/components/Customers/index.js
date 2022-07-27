import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper";

// Import Swiper styles
import "swiper/css";

import * as s from "./styles";
import * as t from "../fontStyles";
import { StaticImage } from "gatsby-plugin-image";

import ImageBackground from "../ImageBackground";

export default function Customers() {
    return (
        <s.customers>
            <ImageBackground selectedImg={1} top={"13%"} left={"-50%"} width={"200%"} />
            <s.horizontalPadding>
                <t.h1 textAlign={"center"}>
                    Nossos <span>clientes</span>
                </t.h1>
            </s.horizontalPadding>
            <s.swiperWrapper>
                <Swiper spaceBetween={50} slidesPerView={4} breakpoints={{1199:{slidesPerView: 4}}} autoplay={{ delay: 0, disableOnInteraction: false }} speed={2000} loop={true} freeMode={true} modules={[Autoplay, FreeMode]}>
                    <SwiperSlide>
                        <StaticImage src="../../images/c1.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <StaticImage src="../../images/c2.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <StaticImage src="../../images/c3.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <StaticImage src="../../images/c4.png" />
                    </SwiperSlide>
                </Swiper>
            </s.swiperWrapper>
            <s.swiperWrapper>
                <Swiper spaceBetween={50} slidesPerView={4} breakpoints={{1199:{slidesPerView: 4}}} autoplay={{ delay: 0, disableOnInteraction: false, reverseDirection: true }} speed={2000} loop={true} loopAdditionalSlides={10} freeMode={true} modules={[Autoplay, FreeMode]}>
                    <SwiperSlide>
                        <StaticImage src="../../images/c1.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <StaticImage src="../../images/c2.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <StaticImage src="../../images/c3.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <StaticImage src="../../images/c4.png" />
                    </SwiperSlide>
                </Swiper>
            </s.swiperWrapper>
        </s.customers>
    );
}
