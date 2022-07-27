import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

import * as s from './styles'
import * as t from '../fontStyles'

export default function Hero(){
    return(
        <s.heroWrapper>
            <s.imgBackground>
                <StaticImage src='../../images/hero.jpg'/>
                
                <s.heroTitle>
                    <t.h1 textAlign={"center"} color={"#fff"} >Fornecimento<br/>de Estações Anemométricas</t.h1>
                </s.heroTitle>
            </s.imgBackground>
        </s.heroWrapper>
    )
}