import React from "react";

import * as s from './styles'
import * as t from '../fontStyles'
import { StaticImage } from "gatsby-plugin-image";

export default function ServiceBox(props){

    function imgSelect(){
        switch (props.idImg) {
            case 1:
                return <StaticImage src="../../images/services/anemometrica.jpg" />
        
            case 2:
                return <StaticImage src="../../images/services/solar.jpg" />
            
            case 3:
                return <StaticImage src="../../images/services/tower.jpg" />
            
            case 4:
                return <StaticImage src="../../images/services/instrumentacao.jpg" />

            case 5:
                return <StaticImage src="../../images/services/maintence.jpg" />

            case 6:
                return <StaticImage src="../../images/services/maintence2.jpg" />

            case 7:
                return <StaticImage src="../../images/services/data.jpg" />

            case 8:
                return  <StaticImage src="../../images/services/cert.jpg" />
        }
    }
    return(
        <s.serviceBox id={props.id} >
            {imgSelect()}
            <div>
                <t.h3 weight="600" dangerouslySetInnerHTML={{__html: props.title}} ></t.h3>
                <t.p>{props.description}</t.p>
            </div>
        </s.serviceBox>
    )
}