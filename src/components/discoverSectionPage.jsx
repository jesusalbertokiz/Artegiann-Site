import * as React from 'react';
import CardNft from './cardNft';
import {  Grid, Typography} from '@mui/material';
import {  graphql, useStaticQuery } from 'gatsby';



function DiscoverSectionPage(){

    const data = useStaticQuery(graphql`
    query discoverPage{
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
                style={{display:'flex', flexDirection:'column', alignItems:'center', marginTop:'3rem'}}
            >
                <Grid container spacing={3} className='heroBack' style={{ minHeight: 350, maxWidth:'95vw', margin:'1rem auto 3rem auto', alignItems:'center', borderRadius:'30px'}}>
                    <Grid
                        item={true}
                        lg={12}
                        md={12}
                        sm={12}
                        xs={12}
                        container
                        direction='column'
                        justify='center'
                        alignItems='flex-center'
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
                            }}
                    
                        style={{ margin:'15px', textAlign:'center' }}>
                        Descubre
                        </Typography>

                        <Typography variant='subtitle1' color='white'
                        sx={{
                            fontSize: {
                            lg: '1.5rem',
                            md: '1.25rem',
                            sm: '1.25rem',
                            xs: '1.25rem'
                            },
                            }}
                        style={{ margin: 15, textAlign:'center'  }}>
                        Aca podras ver todos los personajes de Unifree. Este es mi ultimo proyecto al cual le he dedicado mucho tiempo y amor. La historia de cada uno de los personajes es unica y bizarra. Muchos de ellos han vivido cosas inimaginables y es por eso que cada uno es muy especial.
                        </Typography>

                    </Grid>

                </Grid>

                <Grid
                    container
                    spacing={1}
                    style={{width:'80%', margin:'0 auto'}}
                >


                {

                    dataNFT.map((item)=>(
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
                
            </Grid>
        </React.Fragment>
    )
}

export default DiscoverSectionPage;

