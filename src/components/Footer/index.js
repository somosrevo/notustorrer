import React from "react";

import * as s from "./styles";
import * as t from "../fontStyles";
import { StaticImage } from "gatsby-plugin-image";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import {useTranslation} from 'react-i18next'

export default function Footer() {
    const translator = useTranslation()
    return (
        <s.footerWrapper id="footer">
            <s.footerLogo>
                <StaticImage src="../../images/notustorrebranco.png" height={60} />
            </s.footerLogo>
            <t.h3 color={"#fff"} mgBottom={"1rem"}>
                {translator.t('Nossos contatos')}
            </t.h3>

            <s.footerGrid>
                <div>
                    <t.h5 color={"#fff"} weight={"700"}>
                        {translator.t('Endereço')}
                    </t.h5>
                    <t.p color={"#fff"} mgBottom={"3rem"}>
                        R. José Cândido de Oliveira, 51 - Jacundá, Aquiraz - CE, 61700-000
                    </t.p>
                </div>
                <div>
                    <t.h5 color={"#fff"} weight={"700"}>
                        {translator.t('Telefone')}
                    </t.h5>
                    <t.p color={"#fff"} mgBottom={"3rem"}>
                        +55 85 2139-0358
                    </t.p>
                </div>
                <div>
                    <t.h5 color={"#fff"} weight={"700"}>
                        Email
                    </t.h5>
                    <t.p color={"#fff"} mgBottom={"3rem"}>
                        comercial@notustorres.com.br
                    </t.p>
                </div>
                <div>
                    <t.h5 color={"#fff"} weight={"700"}>
                        {translator.t('Redes Sociais')}
                    </t.h5>
                    <s.iconsWrapper>
                        <a href="https://www.instagram.com/notustorres/"><BsInstagram color="#fff" size={40} /></a>
                        <a href="https://www.linkedin.com/company/notustorres/"><BsLinkedin color="#fff" size={40} /></a>
                    </s.iconsWrapper>
                </div>
            </s.footerGrid>
        </s.footerWrapper>
    );
}
