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

export function Head() {
  return (
    <>
      <html lang="es"/>
      <title>Descubre</title>
      <link rel="icon" type="image/png" href="https://raw.githubusercontent.com/jesusalbertokiz/Artegiann-Site/main/src/images/staticImage/logo.png"></link>
    </>
  )
}