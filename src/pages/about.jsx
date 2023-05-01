import * as React from "react"
import theme from "../theme"
import { ThemeProvider } from "@mui/material"
import Layout from "../components/layout";
import {
  Grid,
  Typography
} from '@mui/material';

const AboutPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <div sx={{ padding: '1rem'}}>
          <Grid container spacing={4}>
            <Grid item xs={12} sx={{ width: "100%", sm: { width: "50%" }, md: { width: "33.33%" }}}>
              <Typography variant="h1" color="secondary" gutterBottom>
                ¡Hola! Mi nombre es Giannella A. Casilli T.
              </Typography>
              <Typography variant="body1" color="white" paragraph>
                Desde que era pequeña, siempre he tenido una gran pasión por el mundo de
                las artes, desarrollando habilidades en la pintura, el dibujo, la
                escultura en plastilina, el diseño y la escritura de cuentos.
              </Typography>
              <Typography variant="body1" color="white" paragraph>
                Además, soy una emprendedora y creadora de mi propia marca de diseños
                exclusivos llamada ArteGiann, y también me dedico a la creación digital
                de NFTs, que en un mes aproximadamente estarán en el mercado.
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ width: "100%", sm: { width: "50%" }, md: { width: "33.33%" }}}>
              <Typography variant="h2" color="secondary" gutterBottom>
                Mis pasiones
              </Typography>
              <Typography variant="body1" color="white" paragraph>
                Soy una apasionada del Anime (series japonesas), la naturaleza, defensora
                del medio ambiente y los animales. Me siento muy identificada con las
                energías, la espiritualidad y el universo.
              </Typography>
              <Typography variant="body1" color="white" paragraph>
                A pesar de mi corta edad y de estar dentro del Espectro Autista, siempre estoy rompiendo paradigmas y
                desarrollándome en cada una de las metas que me propongo. Siempre quiero
                dar un paso más allá y sé que mi destino está en mis propias manos. Soy
                una firme creyente de que si se tiene pasión por lo que se ama, se pueden
                alcanzar todos los sueños.
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ width: "100%", sm: { width: "50%" }, md: { width: "33.33%" }}}>
              <Typography variant="h2" color="secondary" gutterBottom>
                Formación académica
              </Typography>
              <Typography variant="body1" color="white" paragraph>
              En cuanto a mi formación académica, he dedicado mucho esfuerzo y
              dedicación para alcanzar mis objetivos. He culminado el High School
              &#40;bachillerato internacional&#41;  en el Dawere International High School, y
              el bachillerato en Valencia, Venezuela, con la mención honorífica SUMMA
              CUM LAUDE. Actualmente, estoy becada por la Escuela de Escritores de la
              periodista y escritora Venezolana NACARID PORTAL, autora de mi primer
              cuento “Una relevante conversación”. Además, estoy iniciando un Diplomado
              de Gestión Ambiental en la UNESCO. También culminé el curso de inglés en
              la Universidad de Carabobo, Laboratorio de Idiomas, en Valencia –
              Venezuela
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Layout>
    </ThemeProvider>
  )
};

export default AboutPage;

export const Head = () => <title>Sobre Mi</title>