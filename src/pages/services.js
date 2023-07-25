import React from "react";
import Layout from "../components/Layout";

import ServiceLayout from "../components/ServiceLayout";

const ServicesPage = () => {
    return(
        <Layout>
            <ServiceLayout/>
        </Layout>
    )
}

export default ServicesPage

export const Head = () => <title>Nótus Torres - Serviços</title>