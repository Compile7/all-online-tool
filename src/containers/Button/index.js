import * as React from 'react';
import Button from '@mui/material/Button';
import { makeStyles } from "@mui/styles";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme();
const useStyles = makeStyles((theme) => ({ 
  buttons: {
    borderRadius: "20px !important"
  }
}));

export default function BasicButtons(props) {
  const classes = useStyles();
  return (
    <ThemeProvider>
      <Button variant="contained" {...props} className={classes.buttons}>{props.children}</Button>
      </ThemeProvider>
  );
}