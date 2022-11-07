import React from "react"
import {
    Grid,
    Button,
    Typography
} from '@mui/material';

import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby";


const AboutSection = () => {
  return (
    <Grid container spacing={2} style={{ minHeight: 400, maxWidth:'90vw', margin:'50px auto', alignItems:'center'}}>
      <Grid
        item={true}
        xs={12}
        sm={8}
        container
        direction='column'
        justify='center'
        alignItems='flex-start'
        style={{ paddingLeft:0}}

      >
        <Typography 
          variant='h2' 
          color='primary'
          sx={{
            fontSize: {
              lg: '4rem',
              md: '3rem',
              sm: '2.5rem',
              xs: '2.3rem'
            },
              textAlign: {
                lg:'start',
                md:'start',
                sm:'start',
                xs: 'center'
              }
            }}
    
          style={{ marginBottom: 20 }}>
          Artegiann es más que una artista...
        </Typography>

        <Typography variant='subtitle1' color='white' style={{ marginBottom: 30, fontSize:'1.20rem', textAlign:'justify', padding:'15px' }}>
          Giannela se siente muy vinculada con su trabajo porque al crear lo hace con pasión, 
          todos sus trabajos llevan una parte de su escencia y de lo que sienta en el momento de crearlos, Haciendolos unicos y especiales.
        </Typography>
        <Typography style={{ margin:'0 auto 2rem auto' }}>
          <Link style={{color:'inherit', textDecoration:'none'}} to='/contact'>
            <Button variant="contained" color="primary" size="large">
              Ver más...
            </Button>
          </Link>
        </Typography>
      </Grid>

      <Grid
          item={true}
          sm={4}
          container
          direction="column"
          justify="center"
          alignItems="flex-start"
          style={{ padding: 10 }}
        >
            <StaticImage width={300} style={{margin:'0 auto'}} src="../images/staticImage/giannela.png" alt="Unifree"/>
      </Grid>
    </Grid>
  )
}
export default AboutSection;