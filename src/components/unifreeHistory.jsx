import React from "react"
import {
    Grid,
    Button,
    Typography
} from '@mui/material';

import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby";


const UnifreeHistory = () => {
  return (
    <Grid container spacing={2} style={{ minHeight: 400, maxWidth:'90vw', margin:'50px auto', alignItems:'center'}}>
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
      
      <Grid
        item={true}
        xs={12}
        sm={6}
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
         Una historia bizarra y extraña
        </Typography>

        <Typography variant='subtitle1' color='white' style={{ marginBottom: 30, fontSize:'1.20rem', textAlign:'justify', padding:'15px' }}>
          Esta universidad fue pionera en el campo de la mutación genética en una epoca donde la humanidad casi se extingue por culpa de un virus letal. 
          Fue gracias a los genes de algunos animales que eran inmunes a la enfermedad lo que hizo que el campo de la medicina y el mundo como se conocia cambiara radicalmente.
        </Typography>
        <Typography style={{ margin:'0 auto' }}>
          <Link style={{color:'inherit', textDecoration:'none'}} to='/unifree'>
            <Button variant="contained" color="primary" size="large">
            Ver más...
            </Button>
          </Link>
        </Typography>
      </Grid>
    </Grid>
  )
}
export default UnifreeHistory;