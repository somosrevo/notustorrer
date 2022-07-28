import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

import * as s from './styles'
import * as t from '../fontStyles'

export default function Hero(){
    return(
        <s.heroWrapper>
            <s.imgBackground>
                {/* <StaticImage src='../../images/hero.jpg'/> */}
                <StaticImage src='../../images/hero2.jpg'/>
                <s.heroTitle>
                    <t.h1 textAlign={"center"} color={"#fff"} >Fornecimento<br/>de Estações Anemométricas</t.h1>
                </s.heroTitle>
                <s.heroLogo>
                    <StaticImage src='../../images/notustorreslogo.png' height={200} />
                </s.heroLogo>
            </s.imgBackground>
        </s.heroWrapper>
    )
}