import * as React from "react"
import theme from "../theme"
import { ThemeProvider } from "@mui/material"
import Layout from "../components/layout";
import { Button, Container, Grid, IconButton, Typography } from '@mui/material';
import TiktokIcon from '../components/tiktokIcon'
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { ShoppingCart } from "@mui/icons-material";
import { Link } from "gatsby";

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
              <Typography variant="body1" color="primary" gutterBottom>
                ¡Hola! Si te gustaría contactar con Giannella, la creadora de ArteGiann, para conocer más sobre sus diseños exclusivos y creatividad, o para adquirir algún producto en su tienda en línea, aquí te dejamos sus medios de contacto
              </Typography>
            </Grid>
            <Grid item xs={12} textAlign="center">
              <Grid container spacing={2} justifyContent="center" alignItems="center" style={{margin:'auto'}}>
                <Grid item xs={12} md={4}>
                  <Typography variant="body1" color="primary" gutterBottom>
                    Redes sociales: Puedes seguir a Giannella en Twitter, Instagram y Facebook, donde comparte sus obras de arte y su creatividad. Encuéntrala en @artegiannct.
                  </Typography>
                  <Grid item xs={12} textAlign="center">
                    <IconButton href="https://www.instagram.com/" target="_blank" rel="noopener">
                      <InstagramIcon style={{color:'#7b1fa2'}} />
                    </IconButton>
                    <IconButton href="https://www.tiktok.com/" target="_blank" rel="noopener">
                      <TiktokIcon />
                    </IconButton>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography variant="body1" color="primary" gutterBottom>
                    WhatsApp: También puedes escribirle vía WhatsApp al número +58 414-439.64.02 para hacerle preguntas o hacerle pedidos.
                  </Typography>
                  <WhatsAppIcon />
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography variant="body1" color="primary" gutterBottom>
                    Tiendas en línea: Si quieres adquirir algún producto de ArteGiann, puedes visitar sus tiendas en línea en artegiann.atienda.la.
                  </Typography>
                  <Link href="https://www.artegiann.atienda.la" target="_blank" rel="noopener">
                    <ShoppingCart />
                  </Link>
                </Grid>
              </Grid>
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

