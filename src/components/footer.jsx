import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Button, Typography } from '@mui/material';
import TiktokIcon from './tiktokIcon'
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'gatsby'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#0000',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderRadius:'5px'
}));

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1}} id='footer'>
      <Grid container spacing={1} lg={{}} style={{justifyContent:'center', borderRadius:'16px'}} className='bodyFooter'>
        
        
        
        {/* DESCRIPCION DEL NEGOCIO */}
        <Grid xs={12} sm={8} md={4} lg={4}>
          <Item>
            <Typography variant='h6'>
              Artegiann
            </Typography>
            <Typography variant='p' color='grey' style={{fontSize:'0.8rem'}}>
              Giannela es una chica venezolana apasionada al arte y a la pintura.
              desde pequeña mostro gran pasión e imaginación. Hoy en dia se dedica a imortalizar
              sus creaciones gracias a los NFTs, elaborando diseños exclusivos de personajes con un 
              transfondo único
            </Typography>
          </Item>
        </Grid>
        
        {/* CATEGORIAS DEL FOOTER */}
        <Grid container xs={11} md={4} lg={4} spacing={4} >
          <Grid xs={6} lg={6}>
            <Item>
              <Box id="category-a">
                <Typography variant='h6' align='center'>
                  Recursos
                </Typography>
              </Box>
              <Box component="div" aria-labelledby="category-b" >
                <Typography>
                  <Link style={{textDecoration:'none',color:'grey', fontSize:'0.9rem'}} to='/discover'>
                    Descubre
                  </Link>
                </Typography>
              </Box>
            </Item>
          </Grid>
          <Grid xs={6} lg={6}>
            <Item>
              <Box id="category-b">
                <Typography variant='h6' align='center'>
                  Artista
                </Typography>
              </Box>
              <Box component="div" aria-labelledby="category-b" >
                <Typography>
                  <Link style={{textDecoration:'none',color:'grey', fontSize:'0.9rem'}} to='/about'>
                    Sobre Mi
                  </Link>
                </Typography>
                <Typography>
                  <Link style={{textDecoration:'none',color:'grey', fontSize:'0.9rem'}} to='/contact'>
                    Contácto
                  </Link>
                </Typography>
              </Box>
            </Item>
          </Grid>
      
        </Grid>


        {/* FIN DEL FOOTER */}
        <Grid
          xs={11}
          sm={11}
          md={8}
          lg={6}

          container
          justifyContent="space-around"
          alignItems="center"
          flexDirection={{ xs: 'column', sm: 'row' }}
          sx={{ fontSize: '12px' }}
        >
          <Grid sx={{ order: { xs: 2, sm: 1 } }}>
            <Item>©Artegiann 2023. All rights reserved</Item>
          </Grid>
          <Grid container columnSpacing={1} style={{justifyContent:'center'}} sx={{ order: { xs: 1, sm: 2 } }}>
            <Grid>
              <Item>
                <Button>
                  <TiktokIcon/>
                </Button>
              </Item>
            </Grid>
            <Grid>
              <Item>
                <Button>
                  <InstagramIcon/>
                </Button>
              </Item>
            </Grid>
          </Grid>
        </Grid>
        
      </Grid>
    </Box>
  );
}
