import React from "react";

import * as s from './styles'
import * as t from '../fontStyles'
import ServiceBlock from "../ServiceBlock";
import ImageBackground from "../ImageBackground";

export default function ServicesHome(){
    return (
        <s.servicesWrapper>
            <ImageBackground selectedImage={2} width={"200%"} top={"40%"} left={"-50%"} />
            <s.horizontalPadding>
                <t.h1 textAlign={"center"} ><span>Serviços</span></t.h1>
                <s.servicesGrid>
                    <ServiceBlock/>
                    <ServiceBlock/>
                    <ServiceBlock/>
                    <ServiceBlock/>
                    <ServiceBlock/>
                    <ServiceBlock/>
                    <ServiceBlock/>
                    <ServiceBlock/>
                </s.servicesGrid>
            </s.horizontalPadding>
        </s.servicesWrapper>
    );
}