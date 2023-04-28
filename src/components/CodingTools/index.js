import * as React from 'react';
import SideBar from '../../containers/SideBar'
import { makeStyles } from "@mui/styles";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';
import Button from '../../containers/Button';
import Card from '../../containers/Cards';
import Routes from '../../Routes';
import {Link, useLocation, 
    } from 'react-router-dom'


const theme = createTheme();
const useStyles = makeStyles((theme) => ({
    backgroundDiv: {
        display: "flex",
        height: "100%",
        justifyContent: "start",
        width: "100%"
    },
    upperdiv: {
       
        margin: "70px",
      
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    
    },
    content: {
        width: "58%"
    },
    cardsUpperDiv: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
    },

    cards: {
        display: "flex",
        width: "70%",
        justifyContent: "center"
    },
    cardsInnerDiv: {
        width: "100% !important",
    },
    link: {
        textDecoration: "auto !important"
    }, 
    card: {
        // margin: "10px !important",
        height: "300px",
        width: "300px",
        border: "1px solid #c9e6ff",
        borderRadius: "20px !important",
    }
}))


function CodingTools(props) {
    const classes = useStyles();
    const location = useLocation();
    
    const component = Routes?.filter((r) => r?.path === location?.pathname)[0]
    console.log(component);
    return (
        <ThemeProvider theme={theme}>

                <div className={classes.upperdiv}>
                    <div className={classes.content}>
                        <Typography variant='h1'>
                           {component?.sidebarName}
                        </Typography>
                       
                    </div>
                    


            </div>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <Typography variant='h4' >
               { `${component?.sidebarName} Set`}
            </Typography>
            <div className={classes.cardsUpperDiv}>
            <div className={classes.cards}> 
                
                {component?.child?.map((v)=>
                <div className={classes.cardsInnerDiv}>
                <Link to={v.path} className={classes.link}>
                    <Card label={v.sidebarName} className={classes.card} description={v.description}></Card>
                    </Link>
                    </div>)}
            </div>
            </div>
        </ThemeProvider>

    );

}

export default CodingTools;