import * as React from "react"
import theme from "../theme"
import { ThemeProvider } from "@mui/material"
import Layout from "../components/layout";
import { Button, Container, Grid, IconButton, Typography } from '@mui/material';
import TiktokIcon from '../components/tiktokIcon'
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { ShoppingCart } from "@mui/icons-material";
import ImageWithTextRigth from "../components/ImageWithTextRight";
import { StaticImage } from "gatsby-plugin-image";

const ContactPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Container>
          <Grid container spacing={2} justifyContent="center" alignItems="center" style={{margin:'auto', color:'white'}}>
            <ImageWithTextRigth
                
                image={
                  <StaticImage 
                    src="../images/staticImage/giannela-contacto.jpeg" 
                    alt="giannela-contact" 
                    width={350}
                    style={{borderRadius:'30px'}}
                  />}
                title="Contacto"
                subtitle="¡Hola! Si te gustaría contactar con Giannella, la creadora de ArteGiann, para conocer más sobre sus diseños exclusivos y creatividad, o para adquirir algún producto en su tienda en línea, aquí te dejamos sus medios de contacto"
              />
            <Grid className="heroBack" item xs={12} textAlign="center" style={{marginBottom:'30px', borderRadius: '10px'}}>
              <Grid container spacing={2} justifyContent="center" alignItems="flex-start">
                <Grid item xs={12} md={4}>
                  <Typography variant="body1" color="inherit" gutterBottom>
                    Puedes seguir a Giannella en Instagram y TikTok, donde comparte sus obras de arte y su creatividad. Encuéntrala en @artegiannve.
                  </Typography>
                  <Grid item xs={12} textAlign="center">
                    <IconButton href="https://www.instagram.com/artegiannve/" target="_blank" rel="noopener">
                      <InstagramIcon style={{color:'#7b1fa2'}} />
                    </IconButton>
                    <IconButton href="https://www.tiktok.com/" target="_blank" rel="noopener">
                      <TiktokIcon />
                    </IconButton>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography variant="body1" color="inherit" gutterBottom>
                    También puedes escribirle vía WhatsApp para hacerle preguntas o hacerle pedidos.
                  </Typography>
                  <IconButton href="https://wa.link/2i5201" target="_blank" rel="noopener">
                    <WhatsAppIcon style={{color:'#7b1fa2'}}/>
                  </IconButton>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography variant="body1" color="inherit" gutterBottom>
                    Si quieres adquirir algún producto de ArteGiann, puedes visitar sus tiendas en línea.
                  </Typography>
                  <IconButton href="https://artegiann.atienda.la/#/products" target="_blank" rel="noopener">
                    <ShoppingCart style={{color:'#7b1fa2'}}/>
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Layout>
    </ThemeProvider>
  )
}

export default ContactPage

export const Head = () => <title>Contacto</title>

