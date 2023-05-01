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
        <div sx={{ marginTop: 4, marginBottom: 4 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} sx={{ width: "100%", sm: { width: "50%" }, md: { width: "33.33%" }}}>
              <Typography variant="h4" gutterBottom>
                ¡Hola! Mi nombre es Giannella A. Casilli T.
              </Typography>
              <Typography variant="body1" paragraph>
                Soy una desarrolladora de software con experiencia en JavaScript,
                React, Node.js, y otras tecnologías web. Me apasiona crear
                soluciones innovadoras y escalables para problemas reales.
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ width: "100%", sm: { width: "50%" }, md: { width: "33.33%" }}}>
              <Typography variant="h4" gutterBottom>
                ¿Qué puedo hacer por ti?
              </Typography>
              <Typography variant="body1" paragraph>
                Si necesitas ayuda con tu proyecto, no dudes en contactarme. Estoy
                disponible para trabajar en proyectos freelance y también para
                colaborar en proyectos de código abierto.
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ width: "100%", sm: { width: "50%" }, md: { width: "33.33%" }}}>
              <Typography variant="h4" gutterBottom>
                ¿Quieres saber más?
              </Typography>
              <Typography variant="body1" paragraph>
                Puedes encontrar más información sobre mi experiencia y proyectos
                en mi sitio web y en mi perfil de LinkedIn.
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