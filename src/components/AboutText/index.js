import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as s from "./styles";
import * as t from "../fontStyles";

export default function AboutText() {
    return (
        <s.aboutTextWrapper>
            <s.aboutGrid>
                <StaticImage src="../../images/aboutimg.png" />
                <div>
                    <t.h1>
                        Sobre a <span>empresa</span>
                    </t.h1>
                    <t.p>A Nótus Torres procura desenvolver suas atividades de acordo com as melhores práticas do mercado. Foram desenvolvidos procedimentos padrões para todos os serviços que nossas equipes executarão; procedimentos estes que regem as equipes desde o planejamento (fase esta que são dimensionadas as etapas e métodos de execução), bem como os devidos acompanhamentos por nossos coordenadores de campo.</t.p>
                    <t.p>Desenvolvemos uma metodologia de elaboração de relatórios técnicos, conseguindo emitir os mesmos dentro de um prazo de até 15 dias após a execução do serviço; o que permite ao Cliente obter, formalmente, os resultados das execuções dos serviços e melhorar seu planejamento interno.</t.p>
                    <t.p>Estamos desenvolvendo uma ferramenta de gestão de manutenção, que deverá ser apresentada aos nossos Clientes no início do próximo ano. Esta ferramenta proporcionará melhorar nossos fluxos internos, principalmente os planejamentos de execução dos serviços, juntamente com nossos Clientes.</t.p>
                    <t.p>Assim, nosso principal objetivo é proporcionar ao mercado de energia soluções que sejam confiáveis, empregando a qualidade e segurança como referenciais.</t.p>
                </div>
            </s.aboutGrid>
        </s.aboutTextWrapper>
    );
}
