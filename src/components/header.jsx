import * as React from 'react';
import {
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  useTheme, 
  useMediaQuery
} from '@mui/material';

import {Box} from '@mui/system';
import { Link } from 'gatsby'
import DrawerComp from "./drawer"

const Header = ()=> {
    const navLinks = [
        { displayText: "Home", link: "/" },
        { displayText: "Descubre", link: "/discover" },
        { displayText: "Blog", link: "/blog" },
        { displayText: "Sobre Mi", link: "/about" },
        { displayText: "Contacto", link: "/contact" },
      ]
    
    
    const theme = useTheme()
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'))
    

    return (
        <React.Fragment>
          <AppBar position='static'>
            <Toolbar>
                <Box sx={{
                    display:'flex',
                    justifyContent:'space-between',
                    width:'100%'
                }}
                component='div'
                >
                  <Box>
                    <Typography
                        variant='h6'
                        color='inherit'
                    >
                        ArteGiann
                    </Typography> 
                  </Box >
                  {
                    isMatch ? (
                      <>
                        <Box>
                          <DrawerComp pages={navLinks}/>
                        </Box>
                      </>
                    ):(
                      <>
                        <Box>
                          {navLinks.map(item => (
                            <Button color='inherit' key={item.displayText}>
                              <Link style={{color:'inherit', fontWeight:'600',fontSize:'1rem',textDecoration:'none'}} to={item.link}>{item.displayText}</Link>
                            </Button>
                          ))}
                        </Box>
                      </>
                    )
                  }  
                </Box>
            </Toolbar>
          </AppBar>
        </React.Fragment>
    );
}

export default Header;




