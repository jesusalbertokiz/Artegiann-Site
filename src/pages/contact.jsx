import * as React from "react"
import theme from "../theme"
import { ThemeProvider } from "@mui/material"
import Layout from "../components/layout";
import { Button, Container, Grid, IconButton, Typography } from '@mui/material';
import TiktokIcon from '../components/tiktokIcon'
import InstagramIcon from '@mui/icons-material/Instagram';


const ContactPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Container>
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item xs={12} textAlign="center">
              <Typography variant="h3" component="h1" gutterBottom>Contacto</Typography>
            </Grid>
            <Grid item xs={12} textAlign="center">
              <Typography variant="body1" gutterBottom>¡Síguenos en nuestras redes sociales!</Typography>
            </Grid>
            <Grid item xs={12} textAlign="center">
              <IconButton href="https://www.instagram.com/" target="_blank" rel="noopener">
                <InstagramIcon />
              </IconButton>
              <IconButton href="https://www.tiktok.com/" target="_blank" rel="noopener">
                <TiktokIcon />
              </IconButton>
            </Grid>
            <Grid item xs={12} textAlign="center">
              <Button variant="contained" color="primary" href="/">
                Volver al inicio
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Layout>
    </ThemeProvider>
  )
}

export default ContactPage

export const Head = () => <title>Contacto</title>

