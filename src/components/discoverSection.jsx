import * as React from 'react';
import CardNft from './cardNft';
import { Button, Grid, Typography } from '@mui/material';
import { Link, graphql, useStaticQuery } from 'gatsby';



function DiscoverSection(){

    const data = useStaticQuery(graphql`
    query{
        allMdx(filter: {frontmatter: {type: {eq: "nft"}}}) {
          nodes {
            frontmatter {
              banner {
                alt
                src {
                  childImageSharp {
                    gatsbyImageData(formats: PNG, width: 200)
                  }
                }
              }
              title
              slug
            }
          }
        }
      }
      
      

    `)
    
    //Array
    const dataNFT = data.allMdx.nodes

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
                        textAlign:'center',
                        fontSize:'1.20rem'
                    }}
                >
                Aca podras todos los personajes de Unifree. Este es mi ultimo proyecto al cual le he dedicado mucho tiempo y amor. La historia de cada uno de los personajes es unica y bizarra. Muchos de ellos han vivido cosas inimaginables y es por eso que cada uno es muy especial.
                </Typography>
                <Grid
                    container
                    spacing={1}
                    style={{width:'80%', margin:'0 auto'}}
                >

                {
                    dataNFT.slice(6,14).map((item)=>(
                        <CardNft
                            key={item.frontmatter.banner.alt}
                            alt={item.frontmatter.banner.alt}
                            name={item.frontmatter.title}
                            image={item.frontmatter.banner.src.childImageSharp.gatsbyImageData}
                            slug={item.frontmatter.slug}
                        />
                    ))
                } 

                </Grid>
                <Button variant='contained' size='large' sx={{margin:'20px', padding:'10px'}}>
                    <Link>
                        ir a Descubre
                    </Link>
                </Button>
            </Grid>
        </React.Fragment>
    )
}

export default DiscoverSection;




