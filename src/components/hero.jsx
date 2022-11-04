import React from "react"
import {
    Grid,
    Button,
    Typography
} from '@mui/material';

import { StaticImage } from "gatsby-plugin-image"


const Hero = () => {
  return (
    <Grid container spacing={3} style={{ minHeight: 400, maxWidth:'90vw', margin:'0 auto', alignItems:'center'}}>
      <Grid
        item={true}
        xs={12}
        sm={6}
        container
        direction='column'
        justify='center'
        alignItems='flex-start'
        style={{ paddingLeft: 40, paddingRight: 40 }}
      >
        <Typography variant='h4' color='secondary' style={{ marginBottom: 20 }}>
          Unifree, la universidad más perturbadora del mundo
        </Typography>

        <Typography variant='subtitle1' color='white' style={{ marginBottom: 30 }}>
          Esta universidad guarda un secreto oscuro tras sus estudiantes, cada uno con una historia diferente, más extraña y bizarra que otra.
        </Typography>
        <Button variant="contained" color="primary" size="large">
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
            <StaticImage src="../images/university.png" alt="Unifree"/>
        </Grid>
    </Grid>
  )
}
export default Hero