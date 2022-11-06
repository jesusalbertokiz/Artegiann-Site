import * as React from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const CardNft =  (props)=> {

    const image = getImage(props.image)

  return (
    <>
        <Card sx={{ 
                width: 250, 
                margin:'1rem auto',
                display:'flex', 
                flexDirection:'column', 
                alignItems:'center',
                padding:'2rem 0', 
                borderRadius:'16px',
                backgroundColor:'#000000' 
                
            }}
            className='gradient'
            >

            <GatsbyImage
                alt={props.alt}
                image={image}
                width={200}
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
                {props.name}
                    
            </Typography>  

            <Button variant='outlined' color='secondary'  size="medium">
                <Typography>
                    <Link
                      style={{color:'inherit', textDecoration:'none'}}
                      to={`/${props.slug}`}>
                        Ver Historia
                    </Link>
                </Typography>
            </Button>
        </Card>
    </>
  );
}

export default CardNft;
