import { StaticImage } from "gatsby-plugin-image";
import React from "react";

import * as s from './styles'

export default function ImageBackground(){
    return(
        <s.imgTransparent>
            <StaticImage src="../../images/transparentbg.png" />
        </s.imgTransparent>
    )
}