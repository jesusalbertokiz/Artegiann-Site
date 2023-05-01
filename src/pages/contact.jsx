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
        <p>Esta será la pagina de contacto</p>
      </Layout>
    </ThemeProvider>
  )
}

export default IndexPage

export const Head = () => <title>Contacto</title>
