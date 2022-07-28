import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper";

// Import Swiper styles
import "swiper/css";

import * as t from "../fontStyles";
import * as s from "./styles";

import DifferentialCard from "../DifferentialCard";

export default function Differential() {
    const services = [
        {
            id: 1,
            idImg: 1,
            link: "/services#1",
            title: "Fornecimento de Estações Anemométricas ",
            description: "Fabricação e fornecimento de torres treliçadas, galvanizadas a fogo, com alturas em até 130 metros. Fornecimento de todos os sensores, bem como sistemas de aquisição de dados"
        },
        {
            id: 2,
            idImg: 2,
            link: "/services#2",
            title: "Fornecimento de Estações Solarimétricas",
            description: "Fornecimento de torres e sensores de medição, bem como sistema de aquisição de dados."
        },
        {
            id: 3,
            idImg: 3,
            link: "/services#3",
            title: "Montagem de Torres",
            description: "Montagem de torres treliçadas e autoportantes; com equipes experientes com mais de 10 anos de mercado."
        },
        {
            id: 4,
            idImg: 4,
            link: "/services#4",
            title: "Instrumentação",
            description: "Instrumentação de estações anemométricas e solarimétricas completas, tendo suas equipes experiências com todos os dataloggers mais utilizados no mercado"
        },
        {
            id: 5,
            idImg: 5,
            link: "/services#5",
            title: "Manutenção Preventiva",
            description: "Desenvolvimento de planos de manutenção, bem como execução com qualidade."
        },
        {
            id: 6,
            idImg: 6,
            link: "/services#6",
            title: "Manutenção Corretiva",
            description: "Correção de falhas, seja do tipo estrutural como instrumental, com imediato atendimento."
        },
        {
            id: 7,
            idImg: 7,
            link: "/services#7",
            title: "Tratamento dos Dados Medidos",
            description: "Equipe treinada, com experiência em certificação de projetos e análise dos comportamentos das variáveis meteorológicas envolvidas"
        },
        {
            id: 8,
            idImg: 8,
            link: "/services#8",
            title: "Certificação dos Dados Solarimétricos e de Produção Anual de Energia",
            description: "Tratamento dos dados brutos e certificação anual de produção de energia, tendo já certificado mais de 6 GW em projetos de energia solar fotovoltaica e eólica."
        },
    ]

    return (
        <s.differentialWrapper>
            <t.h1 textAlign={"center"}>
                <span>Por que</span> a Nótus?
            </t.h1>
            <s.swiperWrapper>
                <Swiper  slidesPerView={"auto"} breakpoints={{1199: {slidesPerView: 4}}} loop={true} freeMode={false} modules={[FreeMode]}>
                    {services.map((service) => (
                        <SwiperSlide>
                            <DifferentialCard id={service.id} idImg={service.idImg} title={service.title} link={service.link} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </s.swiperWrapper>
        </s.differentialWrapper>
    );
}
