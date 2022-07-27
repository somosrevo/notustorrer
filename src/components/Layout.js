import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

export default function Layout({ children, colorChanger }) {
    const [showSidebar, setShowSidebar] = React.useState(false);
    const toggleSidebar = React.useCallback(() => {
        setShowSidebar((value) => !value);
        console.log(showSidebar);
    }, []);
    return (
        <>
            <Sidebar showSidebar={showSidebar} onClick={toggleSidebar} />
            <Header colorChanger={colorChanger} showSidebar={showSidebar} onClick={toggleSidebar} />
            {children}
            <Footer />
        </>
    );
}
