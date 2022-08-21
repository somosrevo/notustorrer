import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper";

// Import Swiper styles
import "swiper/css";

import * as s from "./styles";
import * as t from "../fontStyles";
import { StaticImage } from "gatsby-plugin-image";
import {useTranslation, Trans} from 'react-i18next'

import ImageBackground from "../ImageBackground";

export default function Customers() {
    const translator = useTranslation()
    return (
        <s.customers>
            <ImageBackground selectedImg={1} top={"13%"} left={"-50%"} width={"200%"} />
            <s.horizontalPadding>
                <t.h1 textAlign={"center"}>
                    <Trans components={{span: <span/>}} >customers</Trans>
                </t.h1>
            </s.horizontalPadding>
            <s.swiperWrapper>
                <Swiper spaceBetween={30} slidesPerView={4} breakpoints={{1199:{slidesPerView: 4}}} autoplay={{ delay: 0, disableOnInteraction: false }} speed={2000} loop={true} freeMode={true} modules={[Autoplay, FreeMode]}>
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
                    <SwiperSlide>
                        <StaticImage src="../../images/c5.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <StaticImage src="../../images/c6.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <StaticImage src="../../images/c7.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <StaticImage src="../../images/c8.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <StaticImage src="../../images/c9.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <StaticImage src="../../images/c10.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <StaticImage src="../../images/c11.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <StaticImage src="../../images/c12.png" />
                    </SwiperSlide>
                </Swiper>
            </s.swiperWrapper>
            <s.swiperWrapper>
                <Swiper spaceBetween={30} slidesPerView={4} breakpoints={{1199:{slidesPerView: 4}}} autoplay={{ delay: 0, disableOnInteraction: false, reverseDirection: true }} speed={2000} loop={true} loopAdditionalSlides={10} freeMode={true} modules={[Autoplay, FreeMode]}>
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
                    <SwiperSlide>
                        <StaticImage src="../../images/c5.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <StaticImage src="../../images/c6.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <StaticImage src="../../images/c7.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <StaticImage src="../../images/c8.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <StaticImage src="../../images/c9.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <StaticImage src="../../images/c10.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <StaticImage src="../../images/c11.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <StaticImage src="../../images/c12.png" />
                    </SwiperSlide>
                </Swiper>
            </s.swiperWrapper>
        </s.customers>
    );
}
