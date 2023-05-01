import * as React from "react"
import theme from "../theme"
import { ThemeProvider } from "@mui/material"
import Layout from "../components/layout";
import Hero from "../components/hero";
import DiscoverSection from "../components/discoverSection";
import UnifreeHistory from "../components/unifreeHistory";
import AboutSection from "../components/aboutSection";


const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Hero
          title="Unifree, la universidad más perturbadora del mundo          "
          subtitle="Esta universidad guarda un secreto oscuro tras sus estudiantes, cada uno con una historia diferente, más extraña y bizarra que otra."
        />
        <DiscoverSection/>
        <UnifreeHistory/>
        <AboutSection/>
      </Layout>
    </ThemeProvider>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
