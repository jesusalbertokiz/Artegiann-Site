import * as React from "react"
import theme from "../theme"
import { ThemeProvider } from "@mui/material"
import Layout from "../components/layout";
import DiscoverSectionPage from "../components/discoverSectionPage";



const DiscoverPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <DiscoverSectionPage/>
      </Layout>
    </ThemeProvider>
  )
}

export default DiscoverPage

export const Head = () => <title>Descubre</title>
