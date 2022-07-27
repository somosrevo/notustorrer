import React from "react";
import { Link } from "gatsby";

import { BsFillGearFill, BsArrowRight } from "react-icons/bs";

import * as s from "./styles";
import * as t from "../fontStyles";

export default function ServiceBlock() {
    return (
        <s.serviceBlock>
            <s.icon>
                <BsFillGearFill size={32} color="#fff" />
            </s.icon>
            <t.h5 weight={"700"}>Fornecimento de Estações Solarimétricas</t.h5>
            <t.p>Fornecimento de torres e sensores de medição, bem como sistema de aquisição de dados.</t.p>
            <s.linkBtn>
                <Link to="/">
                    <t.p mgBottom={"0"}>Ver mais</t.p>
                    <BsArrowRight color="#00ADF2" size={20} />
                </Link>
            </s.linkBtn>
        </s.serviceBlock>
    );
}
