import React from "react";

import * as s from './styles'
import * as t from '../fontStyles'
import ServiceBox from "../ServiceBox";

export default function ServiceLayout(){
    const services = [
        {
            id: 1,
            idImg: 1,
            title: "Fornecimento de <span>Estações Anemométricas</span> ",
            description: "Fabricação e fornecimento de torres treliçadas, galvanizadas a fogo, com alturas em até 130 metros. Fornecimento de todos os sensores, bem como sistemas de aquisição de dados"
        },
        {
            id: 2,
            idImg: 2,
            title: "Fornecimento de <span>Estações Solarimétricas</span>",
            description: "Fornecimento de torres e sensores de medição, bem como sistema de aquisição de dados."
        },
        {
            id: 3,
            idImg: 3,
            title: "Montagem de <span>Torres</span>",
            description: "Montagem de torres treliçadas e autoportantes; com equipes experientes com mais de 10 anos de mercado."
        },
        {
            id: 4,
            idImg: 4,
            title: "<span>Instrumentação</span>",
            description: "Instrumentação de estações anemométricas e solarimétricas completas, tendo suas equipes experiências com todos os dataloggers mais utilizados no mercado"
        },
        {
            id: 5,
            idImg: 5,
            title: "Manutenção <span>Preventiva</span>",
            description: "Desenvolvimento de planos de manutenção, bem como execução com qualidade."
        },
        {
            id: 6,
            idImg: 6,
            title: "Manutenção <span>Corretiva</span>",
            description: "Correção de falhas, seja do tipo estrutural como instrumental, com imediato atendimento."
        },
        {
            id: 7,
            idImg: 7,
            title: "Tratamento dos <span>Dados Medidos</span>",
            description: "Equipe treinada, com experiência em certificação de projetos e análise dos comportamentos das variáveis meteorológicas envolvidas"
        },
        {
            id: 8,
            idImg: 8,
            title: "Certificação dos <span>Dados Solarimétricos</span> e de Produção Anual de Energia",
            description: "Tratamento dos dados brutos e certificação anual de produção de energia, tendo já certificado mais de 6 GW em projetos de energia solar fotovoltaica e eólica."
        },
    ]

    return(
        <s.servicesLayout>
            <t.h1 mgBottom={"3rem"} >Nossos <span>Serviços</span></t.h1>
            {services.map((service) => (<ServiceBox id={service.id} idImg={service.idImg} title={service.title} description={service.description} />))}
        </s.servicesLayout>
    )
}