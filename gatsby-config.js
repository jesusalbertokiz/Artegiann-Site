const siteMetadata = {
  siteMetadata: {
    title: `materialUI-jmxs`,
    siteUrl: `materialui-jmxs.vercel.app`
}}

module.exports = {
  siteMetadata,
  plugins: [
    "gatsby-plugin-image", 
    "gatsby-plugin-sitemap", 
    "gatsby-plugin-mdx", 
    {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  },
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", 
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};