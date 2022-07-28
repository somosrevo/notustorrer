import React from "react";

import * as s from "./styles";
import { GiHamburgerMenu } from "react-icons/gi";
import { StaticImage } from "gatsby-plugin-image";

export default function Header(props) {
    const [scrollPosition, setScrollPosition] = React.useState(0);
    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
        console.log(scrollPosition);
    };

    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrollPosition]);

    return (
        <s.headerWrapper colorChanger={props.colorChanger} scrollPosition={scrollPosition}>
            <s.headerBody>
                <s.toggleSidebarBtn onClick={props.onClick}>
                    <GiHamburgerMenu color="#fff" size={24} />
                </s.toggleSidebarBtn>
                
                <StaticImage src="../../images/notustorrebranco.png" height={60} />
            </s.headerBody>
        </s.headerWrapper>
    );
}
