import * as React from 'react';
import SideBar from '../../containers/SideBar'
import { makeStyles } from "@mui/styles";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';
import Button from '../../containers/Button';
import Card from '../../containers/Cards';
import Routes from '../../Routes';
import {Link, 
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
        width: "90%",
        height: "600px",
        margin: "70px",
        background: "#b7cfed7a",
        // borderRadius: "0px 0px 10px 10px"
        borderRadius: "49% 7% 50% 8% / 45% 46% 51% 52%",
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
        margin: "10px !important",
        border: "1px solid #c9e6ff",
        borderRadius: "20px !important",
    background: "#dde6f79c !important",
    }
}))


function LandinPage(props) {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <div className={classes.backgroundDiv}>

                <div className={classes.upperdiv}>
                    <div className={classes.content}>
                        <Typography variant='h1'>
                            All Tools in One Set
                        </Typography>
                        <Typography variant='h6' padding={5}>
                            AIOT is a compact place where you can find all the online tools. You don't need to search for specific tool
                        </Typography>
                        <Button> Check Tools</Button>
                    </div>
                    
                </div>


            </div>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
            <Typography variant='h4' >
                Tools Categories
            </Typography>
            <div className={classes.cardsUpperDiv}>
            <div className={classes.cards}> 
                {Routes.map((r) => 
                <div className={classes.cardsInnerDiv}>
                <Link to={r.path} className={classes.link}>
                    <Card label={r.sidebarName} className={classes.card}></Card>
                    </Link>
                    </div>)}
            </div>
            </div>
        </ThemeProvider>

    );

}

export default LandinPage;