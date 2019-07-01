module.exports = {
  siteMetadata: {
    title: "Hi, looking for covet.ai? 🔎",
    message: "You will not have to wait too long, but this site is ready yet 👷",
    pattern: "Arrows",
    color: "#4c4c4c",
    titleFont: "Righteous",
    messageFont: "Roboto",
    social: [" "],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-starter-under-construction",
        short_name: "Under Construction",
        start_url: "/",
        background_color: "#4c4c4c",
        theme_color: "#4c4c4c",
        display: "standalone",
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-offline"
  ],
}
