import React from "react";

import * as s from './styles'
import * as t from '../fontStyles'
import ServiceBlock from "../ServiceBlock";
import ImageBackground from "../ImageBackground";

export default function ServicesHome(){
    const services = [
        {
            link: "/services#1",
            title: "Fornecimento de Estações Anemométricas ",
            description: "Fabricação e fornecimento de torres treliçadas, galvanizadas a fogo, com alturas em até 130 metros. Fornecimento de todos os sensores, bem como sistemas de aquisição de dados"
        },
        {
            link: "/services#2",
            title: "Fornecimento de Estações Solarimétricas",
            description: "Fornecimento de torres e sensores de medição, bem como sistema de aquisição de dados."
        },
        {
            link: "/services#3",
            title: "Montagem de Torres",
            description: "Montagem de torres treliçadas e autoportantes; com equipes experientes com mais de 10 anos de mercado."
        },
        {
            link: "/services#4",
            title: "Instrumentação",
            description: "Instrumentação de estações anemométricas e solarimétricas completas, tendo suas equipes experiências com todos os dataloggers mais utilizados no mercado"
        },
        {
            link: "/services#5",
            title: "Manutenção Preventiva",
            description: "Desenvolvimento de planos de manutenção, bem como execução com qualidade."
        },
        {
            link: "/services#6",
            title: "Manutenção Corretiva",
            description: "Correção de falhas, seja do tipo estrutural como instrumental, com imediato atendimento."
        },
        {
            link: "/services#7",
            title: "Tratamento dos Dados Medidos",
            description: "Equipe treinada, com experiência em certificação de projetos e análise dos comportamentos das variáveis meteorológicas envolvidas"
        },
        {
            link: "/services#8",
            title: "Certificação dos Dados Solarimétricos e de Produção Anual de Energia",
            description: "Tratamento dos dados brutos e certificação anual de produção de energia, tendo já certificado mais de 6 GW em projetos de energia solar fotovoltaica e eólica."
        },
    ]

    return (
        <s.servicesWrapper>
            <ImageBackground selectedImage={2} width={"200%"} top={"40%"} left={"-50%"} />
            <s.horizontalPadding>
                <t.h1 textAlign={"center"} ><span>Serviços</span></t.h1>
                <s.servicesGrid>
                    {services.map((service) => (
                        <ServiceBlock link={service.link} title={service.title} description={service.description} />
                    ))}
                </s.servicesGrid>
            </s.horizontalPadding>
        </s.servicesWrapper>
    );
}