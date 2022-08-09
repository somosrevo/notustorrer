import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

// Import Swiper styles
import "swiper/css";

import * as t from "../fontStyles";
import * as s from "./styles";

import DifferentialCard from "../DifferentialCard";
import {services} from '../servicesList'

import {useTranslation, Trans} from 'react-i18next'

export default function Differential() {

    const translator = useTranslation()

    return (
        <s.differentialWrapper>
            <t.h1 textAlign={"center"}>
                <Trans components={{span: <span/>}} >differential</Trans>
            </t.h1>
            <s.swiperWrapper>
                <Swiper  slidesPerView={"auto"} breakpoints={{1199: {slidesPerView: 4}}} loop={true} freeMode={false} modules={[FreeMode]}>
                    {services.map((service) => (
                        <SwiperSlide>
                            <DifferentialCard id={service.id} idImg={service.idImg} title={service.title} link={service.link} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </s.swiperWrapper>
        </s.differentialWrapper>
    );
}
