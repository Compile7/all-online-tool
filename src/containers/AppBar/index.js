import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from "@mui/styles";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Select from '../Select';
import Routes from '../../Routes';
import { useNavigate } from 'react-router-dom';

const theme = createTheme();
const useStyles = makeStyles((theme) => ({
  appbar: {
    "& .MuiAppBar-root":{

      backgroundColor: "#fff",
      boxShadow:"3px 3px 10px 3px #b7cfed" 
    }
  },
  title: {
    color: "black",
    fontWeight: "800 !important",
    fontSize: "1.8rem !important",
    marginLeft: "20px !important"
  },
  headerElements: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between"
  }
}))

const items = ["Text Tools", "Coding Tools"]

export default function ButtonAppBar() {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }} className={classes.appbar}>
        <AppBar position="static" >
          <Toolbar>
            {/* <IconButton
              size="large"
              edge="start"
              color="black"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton> */}
            <div className={classes.headerElements}>
              <Typography variant="h6" component="div" className={classes.title} onClick={() => navigate('/')}>
                AIOT
              </Typography>
              <div>
                <Select label="Category" items={Routes} />
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}