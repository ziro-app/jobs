module.exports = {
  plugins: [
    "gatsby-plugin-netlify-cms",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/blog`,
        name: "markdown-pages",
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Vagas",
        short_name: "Vagas",
        start_url: "/",
        background_color: "#FFF",
        theme_color: "#FFF",
        display: "standalone",
        icon: "static/social-media.png",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-offline",
  ],
};
