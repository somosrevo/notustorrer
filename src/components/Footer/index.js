import React from "react";

import * as s from "./styles";
import * as t from "../fontStyles";
import { StaticImage } from "gatsby-plugin-image";
import { BsInstagram, BsLinkedin } from "react-icons/bs";

export default function Footer() {
    return (
        <s.footerWrapper>
            <s.footerLogo>
                <StaticImage src="../../images/notustorrebranco.png" height={60} />
            </s.footerLogo>
            <t.h3 color={"#fff"} mgBottom={"1rem"}>
                Nossos contatos
            </t.h3>

            <s.footerGrid>
                <div>
                    <t.h5 color={"#fff"} weight={"700"}>
                        Endereço
                    </t.h5>
                    <t.p color={"#fff"} mgBottom={"3rem"}>
                        R. José Cândido de Oliveira, 51 - Jacundá, Aquiraz - CE, 61700-000
                    </t.p>
                </div>
                <div>
                    <t.h5 color={"#fff"} weight={"700"}>
                        Telefone
                    </t.h5>
                    <t.p color={"#fff"} mgBottom={"3rem"}>
                        +55 85 3393.5680
                    </t.p>
                </div>
                <div>
                    <t.h5 color={"#fff"} weight={"700"}>
                        Email
                    </t.h5>
                    <t.p color={"#fff"} mgBottom={"3rem"}>
                        atendimento@notustorres.com.br
                    </t.p>
                </div>
                <div>
                    <t.h5 color={"#fff"} weight={"700"}>
                        Redes Sociais
                    </t.h5>
                    <s.iconsWrapper>
                        <BsInstagram color="#fff" size={40} />
                        <BsLinkedin color="#fff" size={40} />
                    </s.iconsWrapper>
                </div>
            </s.footerGrid>
        </s.footerWrapper>
    );
}
