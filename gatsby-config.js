module.exports = {
    siteMetadata: {
        title: `Nótus Torres`,
        siteUrl: `https://www.notustorres.com.br`,
        description: `Fornecimento de Torres de Medições anemométricas e solarimétricas`,
        image: `/notustorreslogo.png`,
    },
    plugins: [
        "gatsby-plugin-styled-components",
        {
            resolve: "gatsby-plugin-google-analytics",
            options: {
                trackingId: "ADD-IT-LATER",
            },
        },
        "gatsby-plugin-image",
        
        "gatsby-plugin-sitemap",
        "gatsby-plugin-mdx",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: "./src/pages/",
            },
            __key: "pages",
        },
    ],
};
