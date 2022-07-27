import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper";

// Import Swiper styles
import "swiper/css";

import * as t from "../fontStyles";
import * as s from "./styles";

import DifferentialCard from "../DifferentialCard";

export default function Differential() {
    return (
        <s.differentialWrapper>
            <t.h1 textAlign={"center"}>
                <span>Por que</span> a Nótus?
            </t.h1>
            <s.swiperWrapper>
                <Swiper  slidesPerView={"auto"} breakpoints={{1199: {slidesPerView: 4}}} loop={true} freeMode={false} modules={[FreeMode]}>
                    <SwiperSlide>
                        <DifferentialCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <DifferentialCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <DifferentialCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <DifferentialCard />
                    </SwiperSlide>
                </Swiper>
            </s.swiperWrapper>
        </s.differentialWrapper>
    );
}
