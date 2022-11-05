import * as React from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { StaticImage } from 'gatsby-plugin-image';

export default function CardNft() {


  return (
    <>
        <Card sx={{ 
                maxWidth: 250, 
                margin:'1rem auto',
                display:'flex', 
                flexDirection:'column', 
                alignItems:'center',
                padding:'2rem 0', 
                borderRadius:'16px' 
                
            }}
            className='gradient'
            >

            <StaticImage
                width={200}
                alt="green iguana"
                src="../images/Alnika-Scott.jpg"
                style={{borderRadius:'16px'}}
            />

            <Typography 
            variant="h4"
            style={{
                margin:'20px auto',
                padding:'0 20px',
                textAlign:'center'
                }}
            >
                Miguel Angel Ortiz
                    
            </Typography>  

            <Button variant='contained'  size="large">Ver Historia</Button>



            {/* <Item elevation={6} 
                sx={{ 
                    maxWidth: '90%',
                    minHeight: '200px', 
                    paddingBottom:'2rem', 
                    margin:'2.5rem 2rem', 
                    display:'flex', 
                    flexDirection:'column', 
                    alignItems:'center',
                    borderRadius:'16px',

                }}>
                
                <StaticImage
                    alt="green iguana"
                    src="../images/Alnika-Scott.jpg"
                    style={{borderRadius:'16px'}}
                />
                    <Typography 
                        variant="h4"
                        style={{
                            margin:'20px auto',
                            padding:'0 20px'
                        }}
                    >
                        Miguel Angel Ortiz
                    
                    </Typography>               
                    <Button variant='contained'  size="large">Ver Historia</Button>
            
            </Item> */}
        </Card>
    </>
  );
}
