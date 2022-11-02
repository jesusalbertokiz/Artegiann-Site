import * as React from 'react';
import {
  Drawer, 
  IconButton, 
  List, 
  ListItemButton, 
  ListItemText,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'gatsby';

const DrawerComp = (props)=>{

  const [openDrawer, setOpenDrawer] = React.useState(false)
  
  return(
    <React.Fragment>
    <Drawer
      open={openDrawer}
      onClose={()=>setOpenDrawer(false)}
      style={{padding:'1rem'}}
    >
      <List>
        {
          props.pages.map(items => (
            <ListItemButton key={items.displayText}>
              <ListItemText>
                <Link style={{color:'black', textDecoration:'none'}} to={items.link}>
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