import React from "react";

import * as s from "./styles";
import * as t from "../fontStyles";
import { StaticImage } from "gatsby-plugin-image";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "gatsby";
import {useTranslation, Trans} from 'react-i18next'

export default function About() {
    const translator = useTranslation()
    return (
        <s.aboutWrapper>
            <s.horizontalPadding>
                <s.aboutGrid>
                    <StaticImage src="../../images/aboutimg.png" />
                    <div>
                        <t.h1>
                            <Trans components={{span: <span/>}} >Sobre nos</Trans>
                        </t.h1>
                        <t.p>
                            {translator.t('A Nótus Torres procura desenvolver suas atividades de acordo com as melhores práticas do mercado. Foram desenvolvidos procedimentos padrões para todos os serviços que nossas equipes executarão.')}
                        </t.p>
                        <s.linkBtn>
                            <Link to="/about">
                                <t.p>{translator.t('Saiba mais sobre nós')}</t.p>
                                <BsArrowRight color="#00ADF2" size={20} />
                            </Link>
                        </s.linkBtn>
                    </div>
                </s.aboutGrid>
            </s.horizontalPadding>
        </s.aboutWrapper>
    );
}
