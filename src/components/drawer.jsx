import * as React from 'react';
import {
  Drawer, 
  IconButton, 
  List, 
  ListItemButton, 
  ListItemText,
  Typography,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'gatsby';

const DrawerComp = (props)=>{

  const [openDrawer, setOpenDrawer] = React.useState(false)
  
  return(
    <React.Fragment>
    <Drawer
      anchor='top'
      open={openDrawer}
      onClose={()=>setOpenDrawer(false)}
      style={{textAlign:'center'}}
      
    >
      <List style={{backgroundColor:'#23212d'}}>
        <Typography
          variant='h5'
          color='primary'
        >
          Artegiann
        </Typography>
        {
          props.pages.map(items => (
            <ListItemButton key={items.displayText}>
              <ListItemText 
                style={{
                  display:'flex',
                  flexDirection:'column',
                  alignItems:'center'
                }}
              >
                <Link 
                  style={{color:'white', textDecoration:'none'}} 
                  to={items.link}>
                    {items.displayText}
                </Link>
              </ListItemText>
            </ListItemButton>
          ))
        }
      </List>
    </Drawer>
    <IconButton onClick={()=>setOpenDrawer(!openDrawer)}>
      <MenuIcon style={{color:'white'}}/>
    </IconButton>
  </React.Fragment>
  )
}

export default DrawerComp;