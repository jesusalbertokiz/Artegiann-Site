import React from "react"
import {
    Grid,
    Button,
    Typography
} from '@mui/material';
import { Link } from "gatsby";


const Hero = () => {
  return (
    <Grid container spacing={3} className='heroBack' style={{ minHeight: 400, maxWidth:'95vw', margin:'1rem auto 3rem auto', alignItems:'center', borderRadius:'30px'}}>
      <Grid
        item={true}
        lg={12}
        md={12}
        sm={12}
        xs={12}
        container
        direction='column'
        justify='center'
        alignItems='flex-start'
        style={{ paddingLeft:0, paddingTop:'2rem' }}

      >
        <Typography 
          variant='h2' 
          color='secondary'
          sx={{
            fontSize: {
              lg: '4rem',
              md: '3.75rem',
              sm: '3rem',
              xs: '2.5rem'
            },
              textAlign: {
                lg:'start',
                md:'start',
                sm:'start',
                xs: 'center'
              },
            }}
    
          style={{ margin:'15px' }}>
          Unifree, la universidad más perturbadora del mundo
        </Typography>

        <Typography variant='subtitle1' color='white'
          sx={{
            fontSize: {
              lg: '1.5rem',
              md: '1.25rem',
              sm: '1.25rem',
              xs: '1.25rem'
            },
              textAlign: {
                lg:'start',
                md:'start',
                sm:'start',
                xs: 'center'
              },
            }}
          style={{ margin: 15 }}>
          Esta universidad guarda un secreto oscuro tras sus estudiantes, cada uno con una historia diferente, más extraña y bizarra que otra.
        </Typography>
        <Typography style={{ margin:'.5rem auto 3rem auto' }}>
          
        </Typography>
      </Grid>

    </Grid>
  )
}
export default Hero