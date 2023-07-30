import * as React from 'react';
import {  TextField, Typography } from '@mui/material';
import SideBar from '../../containers/SideBar'
import { makeStyles } from "@mui/styles";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '../../containers/Button';

const theme = createTheme();
const useStyles = makeStyles((theme) => ({
  outerdiv: {
    width : "100%",
    padding: "0px 10px"
  },
  mainContentDiv: {
    
    display: "flex",
    justifyContent: "center",
    paddingTop: "20px"
  },
  textfield: {
    width: "60%"
  }
}))




function CSSMinifier(props) {
  const classes = useStyles();
  const [cssMinify, setCssMinify ]    = React.useState('');
  const [resultcss, setResultCSS ]    = React.useState('');

  const cssMinifier = (css) => {
    var pattern = /([^{]+\{[^}]*\})+/gi;
     console.log(pattern.test(css));
    // remove comments
    css = css.replace(/\/\*[\s\S]*?\*\//g, '');

    // remove whitespace and newlines
    css = css.replace(/\s+/g, '').replace(/\n/g, '');

    // remove leading/trailing whitespace
    css = css.trim();

    setResultCSS(css)
  }
  return (
    <ThemeProvider theme={theme}>

      <div className={classes.outerdiv}>
        <div className={classes.mainContentDiv}>
          <div className={classes.textfield}>
        <Typography variant='h4' align='left' marginY={5} fontWeight={700}>
          CSS Minifier
        </Typography>
            <TextField
              id="outlined-multiline-static"
              margin='dense'
              multiline
              rows={10}
              value={cssMinify}
              fullWidth
              placeholder="CSS Code"
              required
              onChange={(e) => setCssMinify(e.target.value)}
            />
            <Button  disabled={!cssMinify} onClick={() => cssMinifier(cssMinify)} >Minify </Button>
            <TextField
              id="outlined-multiline-static"
              InputProps={{
                readOnly: true,
              }}
              value={resultcss}
              multiline
              rows={10}
              fullWidth
              margin='dense'
              placeholder="Minified CSS Code"
            />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );

}

export default CSSMinifier;