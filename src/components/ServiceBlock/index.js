import React from "react";
import { Link } from "gatsby";

import { BsFillGearFill, BsArrowRight } from "react-icons/bs";

import * as s from "./styles";
import * as t from "../fontStyles";

import {useTranslation} from 'react-i18next'

export default function ServiceBlock(props) {
    const translator = useTranslation()
    return (
        <s.serviceBlock>
            <s.icon>
                <BsFillGearFill size={32} color="#fff" />
            </s.icon>
            <t.h5 weight={"700"}>
                {translator.t(props.title)}
            </t.h5>
            <t.p>
                {translator.t(props.description)}
            </t.p>
            <s.linkBtn>
                <Link to={props.link}>
                    <t.p mgBottom={"0"}>
                        {translator.t('Ver mais')}
                    </t.p>
                    <BsArrowRight color="#00ADF2" size={20} />
                </Link>
            </s.linkBtn>
        </s.serviceBlock>
    );
}
