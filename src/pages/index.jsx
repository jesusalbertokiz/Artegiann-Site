import * as React from "react"
import theme from "../theme"
import { ThemeProvider } from "@mui/material"
import Layout from "../components/layout";
import Hero from "../components/hero";
import DiscoverSection from "../components/discoverSection";


const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Hero/>
        <DiscoverSection/>
      </Layout>
    </ThemeProvider>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
