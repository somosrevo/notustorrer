import { StaticImage } from "gatsby-plugin-image";
import React from "react";

import * as s from "./styles";

export default function ImageBackground(props) {

    const selectImg = () => {
        if (props.selectedImg === 1) {
            return <StaticImage src="../../images/transparentbg.png" />
        } else {
            return <StaticImage src="../../images/transparentbg2.png" />
        }
    }

    return (
        <s.imgTransparent top={props.top} left={props.left} right={props.right} bottom={props.bottom} width={props.width} height={props.height}>
            {selectImg()}
        </s.imgTransparent>
    );
}
