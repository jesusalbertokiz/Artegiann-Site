import React from "react"
import {
    Grid,
    Button,
    Typography
} from '@mui/material';

import { StaticImage } from "gatsby-plugin-image"


const Hero = () => {
  return (
    <Grid container spacing={3} style={{ minHeight: 400, maxWidth:'90vw', margin:'50px auto', alignItems:'center'}}>
      <Grid
        item={true}
        xs={12}
        sm={6}
        container
        direction='column'
        justify='center'
        alignItems='flex-start'
        style={{ paddingLeft:0, paddingTop:'3rem' }}

      >
        <Typography 
          variant='h2' 
          color='secondary'
          sx={{
            fontSize: {
              lg: '4rem',
              md: '3rem',
              sm: '2.5rem',
              xs: '2.5rem'
            },
              textAlign: {
                lg:'start',
                md:'start',
                sm:'start',
                xs: 'center'
              }
            }}
    
          style={{ marginBottom: 20 }}>
          Unifree, la universidad más perturbadora del mundo
        </Typography>

        <Typography variant='subtitle1' color='white' style={{ marginBottom: 30 }}>
          Esta universidad guarda un secreto oscuro tras sus estudiantes, cada uno con una historia diferente, más extraña y bizarra que otra.
        </Typography>
        <Button variant="contained" color="primary" size="large" style={{ margin:'0 auto' }}>
          Ver más...
        </Button>
      </Grid>
      <Grid
          item={true}
          sm={6}
          container
          direction="column"
          justify="center"
          alignItems="flex-start"
          style={{ padding: 10 }}
        >
            <StaticImage src="../images/staticImage/university.png" alt="Unifree"/>
        </Grid>
    </Grid>
  )
}
export default Hero