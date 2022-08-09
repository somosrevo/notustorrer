import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as s from "./styles";
import * as t from "../fontStyles";
import {useTranslation, Trans} from 'react-i18next'

export default function AboutText() {
    const translator = useTranslation()
    return (
        <s.aboutTextWrapper>
            <s.aboutGrid>
                <StaticImage src="../../images/aboutimg.png" />
                <div>
                    <t.h1>
                        <Trans components={{span: <span/>}} >Sobre a empresa</Trans>
                    </t.h1>
                    <t.p>{translator.t('aboutp1')}</t.p>
                    <t.p>{translator.t('aboutp2')}</t.p>
                    <t.p>{translator.t('aboutp3')}</t.p>
                    <t.p>{translator.t('aboutp4')}</t.p>
                </div>
            </s.aboutGrid>
        </s.aboutTextWrapper>
    );
}
