import React from "react";
import { BsHouseDoorFill, BsFillTelephoneFill, BsGearFill, BsFillBriefcaseFill, BsXSquare } from 'react-icons/bs'
import { StaticImage } from "gatsby-plugin-image";
import ImageBackground from '../ImageBackground'
import { Link } from "gatsby";
import * as s from "./styles";
import * as t from "../fontStyles";

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
            link: "/",
            nome: "Contato",
            icon: <BsFillTelephoneFill size={20} color={"#444"} />
        }
    ]
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
                        <StaticImage src="../../images/notustorreslogo.png" />
                    </s.logoSidebar>

                    {array.map((array) => (
                        <s.sidebarLink>
                        <Link to={array.link}>
                            {array.icon}
                            <t.h5 mgBottom={"0"} >{array.nome}</t.h5>
                        </Link>
                    </s.sidebarLink>
                    ))}
                </s.sidebarBody>
            </s.sidebarWrapper>
        </>
    );
}
