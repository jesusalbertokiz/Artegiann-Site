import * as React from "react"
import theme from "../theme"
import { ThemeProvider } from "@mui/material"
import Layout from "../components/layout";
import Hero from "../components/hero";


const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Hero/>
      </Layout>
    </ThemeProvider>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
