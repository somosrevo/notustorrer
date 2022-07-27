import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { BsCheckCircleFill } from "react-icons/bs"

import * as t from '../fontStyles'
import * as s from './styles'

export default function DifferentialCard(){
    return(
        <s.cardWrapper>
            <s.cardBg>
                <StaticImage src="../../images/sample.png" />
            </s.cardBg>
            <s.styleIcon>
                <BsCheckCircleFill size={40} color="#27AE60" />
            </s.styleIcon>
            <s.cardPanel>
                <t.h5>Certificação dos Dados Solarimétricos e de Produção</t.h5>
            </s.cardPanel>
        </s.cardWrapper>
    )
}