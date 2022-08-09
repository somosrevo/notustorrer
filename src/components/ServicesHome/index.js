import React from "react";

import * as s from './styles'
import * as t from '../fontStyles'
import ServiceBlock from "../ServiceBlock";
import ImageBackground from "../ImageBackground";
import {services} from '../servicesList'
import {useTranslation, Trans} from 'react-i18next'

export default function ServicesHome(){
    

    const translator = useTranslation()

    return (
        <s.servicesWrapper>
            <ImageBackground selectedImage={2} width={"200%"} top={"40%"} left={"-50%"} />
            <s.horizontalPadding>
                <t.h1 textAlign={"center"} >
                    <Trans components={{span: <span/>}} >service</Trans>
                </t.h1>
                <s.servicesGrid>
                    {services.map((service) => (
                        <ServiceBlock link={service.link} title={service.title} description={service.description} />
                    ))}
                </s.servicesGrid>
            </s.horizontalPadding>
        </s.servicesWrapper>
    );
}