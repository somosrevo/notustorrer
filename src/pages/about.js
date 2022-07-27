import * as React from "react";
import { Link } from "gatsby";
import Footer from "../components/Footer";
import AboutText from "../components/AboutText";
import Differential from "../components/Differential";
import Partners from "../components/Partners";
import Layout from "../components/Layout";

export default function AboutPage() {
    return (
        <main>
            <Layout>            
                <AboutText />
                <Differential />
                <Partners />
            </Layout>
        </main>
    );
}
