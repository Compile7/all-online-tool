import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
// import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import {BrowserRouter as Router, Link, 
  Routes, Route, useLocation} from 'react-router-dom'
import Typography from '@mui/material/Typography';
import Routess from '../../Routes';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Collapse, Toolbar } from '@mui/material';


const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openList, setOpenList ] = useState({open : false,index: 0 })
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar >
        <Typography>
          TOOLS
        </Typography>
        </Toolbar>
      <Divider />
      <List>
        {Routess.map((i, index) => (
          <div key={i.sidebarName}>
          <ListItem key={i.sidebarName} disablePadding>
            <ListItemButton onClick={() => 
              setOpenList({open: openList.index === index ? !openList.open : true, index})
              }>
              {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
              <ListItemText primary={i.sidebarName} />
              <ListItemIcon >
              {index === openList.index && openList.open ? <ArrowDropUpIcon/> : <ArrowDropDownIcon />}
              </ListItemIcon>
            </ListItemButton>
            
          </ListItem>
           <Collapse in={(openList.index === 0 && !openList.open ? location.pathname.includes(i.path) : index === openList.index && openList.open) } timeout="auto" unmountOnExit>
           <List component="div" disablePadding>
             {i.child.map((val, index) => (
              <div>
              <nav>
              <Link to={val.path}>
             <ListItemButton key={val.sidebarName} sx={{ pl: 0 }}>
               <ListItemIcon>
                 
               </ListItemIcon>
               <ListItemText primary={val.sidebarName} />
             </ListItemButton>
             </Link>
             </nav>   
              </div>
             
             ))}
           </List>
         </Collapse>
         </div>
        ))}
      </List>
      <Divider />
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          key="drawer"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box',
               width: drawerWidth, 
               marginTop: "70px !important",
               borderRadius: "0px 10px 0px 0px",
               background: "#fff" },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
