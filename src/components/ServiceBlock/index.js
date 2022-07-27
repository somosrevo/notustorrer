import React from "react";
import { Link } from "gatsby";

import { BsFillGearFill, BsArrowRight } from "react-icons/bs";

import * as s from "./styles";
import * as t from "../fontStyles";

export default function ServiceBlock(props) {
    return (
        <s.serviceBlock>
            <s.icon>
                <BsFillGearFill size={32} color="#fff" />
            </s.icon>
            <t.h5 weight={"700"}> {props.title} </t.h5>
            <t.p>{props.description}</t.p>
            <s.linkBtn>
                <Link to={props.link}>
                    <t.p mgBottom={"0"}>Ver mais</t.p>
                    <BsArrowRight color="#00ADF2" size={20} />
                </Link>
            </s.linkBtn>
        </s.serviceBlock>
    );
}
