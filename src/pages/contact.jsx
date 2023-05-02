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
          <Grid container spacing={2} justifyContent="center" alignItems="center" style={{margin:'auto'}}>
            <Grid item xs={12} textAlign="center">
              <Typography variant="h1" color="secondary" gutterBottom>Contacto</Typography>
            </Grid>
            <Grid item xs={12} textAlign="center">
              <Typography variant="body1" gutterBottom>
              ¡Hola! Si te gustaría contactar con Giannella, la creadora de ArteGiann, para conocer 
              más sobre sus diseños exclusivos y creatividad, o para adquirir algún producto en su 
              tienda en línea, aquí te dejamos sus medios de contacto
              </Typography>
            </Grid>
            <Grid item xs={12} textAlign="center">
              <IconButton href="https://www.instagram.com/" target="_blank" rel="noopener">
                <InstagramIcon color="#7b1fa2" />
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

