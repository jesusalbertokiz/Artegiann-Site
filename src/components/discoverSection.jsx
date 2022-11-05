import * as React from 'react';
import CardNft from './cardNft';
import { Grid, Typography } from '@mui/material';


const DiscoverSection = ()=>{
    const nfts = [
        { nombre: "Alnika Scott", url: "../images/Alnika-Scott.jpg", link:"" },
        { nombre: "Dominic Rollins", url: "../images/Dominic-Rollins.jpg", link:"" },
        { nombre: "Grecia Singala", url: "../images/Grecia-Singala.jpg", link:"" },
        { nombre: "Hari Kiufa", url: "../images/Hari-Kiufa.jpg", link:"" },
        { nombre: "Miguel Angel Ortiz", url: "../images/Miguel-Angel-Ortiz.jpg", link:"" },
        { nombre: "Tay D'Bron", url: "../images/Tay-DBron.jpg", link:"" },
      ]
    return(
        <React.Fragment>
            <Grid 
                container
                spacing={1}
                style={{display:'flex', flexDirection:'column', alignItems:'center'}}
            >
                <Typography 
                    variant='h3' 
                    color='primary' 
                    xs={{
                        fontSize: {
                            lg: '3rem',
                            md: '2rem',
                            sm: '1.5rem',
                            xs: '1.5rem'
                          }
                    }} >
                    Descubre
                </Typography>
                <Typography 
                    variant='body1' 
                    color='white'
                    style={{
                        margin:'40px',
                        textAlign:'center'
                    }}
                >
                Aca podras todos los personajes de Unifree. Este es mi ultimo proyecto al cual le he dedicado mucho tiempo y amor. La historia de cada uno de los personajes es unica y bizarra. Muchos de ellos han vivido cosas inimaginables y es por eso que cada uno es muy especial.
                </Typography>
                <Grid
                    container
                    spacing={1}
                    style={{width:'80%', margin:'0 auto'}}
                >

                    <CardNft/>
                    <CardNft/>
                    <CardNft/>
                    <CardNft/>
                    <CardNft/>
                    <CardNft/>
                    <CardNft/>
                    <CardNft/>



                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default DiscoverSection;