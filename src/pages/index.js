import * as React from "react";

import "../styles/global.css";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Customers from "../components/Customers";
import Differential from "../components/Differential";
import ServicesHome from "../components/ServicesHome";
import About from "../components/About";

// index page
const IndexPage = () => {
    const colorChanger = true
    return (
        <main>
            <Layout colorChanger={colorChanger} >
                <Hero />
                <Customers />
                <Differential />
                <ServicesHome />
                <About />
            </Layout>
        </main>
    );
};

export default IndexPage;

export const Head = () => <title>Nótus Torres</title>