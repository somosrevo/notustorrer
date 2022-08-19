import React from "react";
import { BsHouseDoorFill, BsFillTelephoneFill, BsGearFill, BsFillBriefcaseFill, BsXSquare } from 'react-icons/bs'
import { StaticImage } from "gatsby-plugin-image";
import ImageBackground from '../ImageBackground'
import { Link } from "gatsby";
import * as s from "./styles";
import * as t from "../fontStyles";
import i18n from "../../i18n";
import {useTranslation} from 'react-i18next'

export default function Sidebar(props) {
    const array = [
        {   
            link: "/",
            nome: "Home",
            icon: <BsHouseDoorFill size={20} color={"#444"} />
        },
        {
            link: "/about",
            nome: "Sobre nós",
            icon: <BsFillBriefcaseFill size={20} color={"#444"} />
        },
        {
            link: "/services",
            nome: "Serviços",
            icon: <BsGearFill size={20} color={"#444"} />
        },
        {
            link: "#footer",
            nome: "Contato",
            icon: <BsFillTelephoneFill size={20} color={"#444"} />
        }
    ]

    const [choosedLang, setChoosedLang] = React.useState("pt-br");

    const onChange = (e) => {
        localStorage.setItem("choosedLang", e.target.value);
        setChoosedLang(localStorage.getItem("choosedLang"));
        i18n.changeLanguage(localStorage.getItem("choosedLang"));
    };

    const translator = useTranslation()

    return (
        <>
            <s.sidebarOverlay showSidebar={props.showSidebar} onClick={props.onClick} />
            <s.sidebarWrapper showSidebar={props.showSidebar}>
                <ImageBackground width={"200%"} left={"unset"} top={"unset"} />
                <s.closeIcon showSidebar={props.showSidebar}>
                    <BsXSquare onClick={props.onClick} size={40} color="#dc3545" />
                </s.closeIcon>
                <s.sidebarBody>
                    <s.logoSidebar>
                        <StaticImage src="../../images/notustorreslogo.png" height={160} />
                    </s.logoSidebar>

                    {array.map((array) => (
                        <s.sidebarLink>
                        <Link to={array.link} onClick={props.onClick}>
                            {array.icon}
                            <t.h5 mgBottom={"0"} >{translator.t(array.nome)}</t.h5>
                        </Link>
                    </s.sidebarLink>
                    ))}

                    <s.lngWrapper>
                        <t.h5>{translator.t('Idioma')}</t.h5>
                        <s.selectLng name="language" onChange={onChange}>
                            <option value="pt-br">Português</option>
                            <option value="en-us">Inglês</option>
                        </s.selectLng>
                    </s.lngWrapper>
                </s.sidebarBody>
            </s.sidebarWrapper>
        </>
    );
}
