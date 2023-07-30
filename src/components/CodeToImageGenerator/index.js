import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import {  Paper, TextField, Typography } from '@mui/material';
import SideBar from '../../containers/SideBar'
import { makeStyles } from "@mui/styles";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '../../containers/Button';
// import Prism from 'prismjs';
// import 'prismjs/themes/prism.css';
// import 'prismjs/components/prism-javascript';
// import 'prismjs/components/prism-python';
// import 'prismjs/components/prism-java';
import * as themes from "react-syntax-highlighter/dist/esm/styles/hljs";
import * as languages from "react-syntax-highlighter/dist/esm/languages/hljs";
import SyntaxHighlighter from "react-syntax-highlighter";

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
  topDiv: {
    width: "60%",
    height: "100%"
  },
  paper: {
    width: "100%", 
    height: "500px",
    border: "1px solid #c2c2c2",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "auto"
  },
  outerTextfieldDiv: {
    width: "inherit",
    margin: "20px",
    
  },
  background : {
    background: "red",
    padding: "60px"
  },
  window: {
    width: "inherit",
    backgroundColor: "black",
    height: "40px",
    padding: "30px 0px 30px 40px",
    display: "flex",
    borderRadius: "5px 5px 0px 0px"
  },
  
  firstDot: {
    width: "15px",
    height: "15px",
    borderRadius: "50%",
    backgroundColor: "red",
    margin: "5px",
  },
  secondDot: {
    width: "15px",
    height: "15px",
    borderRadius: "50%",
    backgroundColor: "yellow",
    margin: "5px",
  },
  thirdDot: {
    width: "15px",
    height: "15px",
    borderRadius: "50%",
    backgroundColor: "green",
    margin: "5px",
  },
  highlighter: {
  minHeight: "300px"
},
editor: {
  border: "none",
  minHeight: "300px",
  padding: "10px",
  resize: "none",
},
  select: {
  height: "100px",
  border: "none",
  borderRadius: "5px",
  padding: "5px 0",
  backgroundColor: "#ffffff",
  width: "100%",
},
  textField: {
    backgroundColor: "#000",
    padding: "30px !important",
    borderRadius: "0px 0px 5px 5px",
    "& .MuiInputBase-root" : {
      color: "white !important" ,

    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      border: "none", // Set the desired borderRadius value here
    },
  }
}))

const defaultLanguage = <code>${"javascript" || Object.keys(languages).sort()[0]}</code>;
const defaultTheme = <code>${"atomOneDark" || Object.keys(themes).sort()[0]}</code>;


function CodeToImageGenerator(props) {
  const classes = useStyles();
  const [code, setCode] = useState("");
  const [resultcss, setResultCSS] = useState("");

const Highlighter = ({ language, theme, children }) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={theme}
      className={classes.highlighter}
    >
      {children}
    </SyntaxHighlighter>
  );
};

const Dropdown = ({ defaultTheme, onChange, data }) => {
  return (
    <select className={classes.select}  onChange={onChange}>
      {Object.keys(data)
        .sort()
        .map((theme, index) => {
          return (
            <option key={index} value={theme}>
              {theme}
            </option>
          );
        })}
    </select>
  );
};
const Editor = ({ placeHolder, onChange, onKeyDown }) => {
  return (
    <textarea
      className={classes.editor}
      placeholder={placeHolder}
      onChange={onChange}
    ></textarea>
  );
};
  const cssMinifier = (css) => {
    var pattern = /([^{]+\{[^}]*\})+/gi;
    console.log(pattern.test(css));
    // remove comments
    css = css.replace(/\/\*[\s\S]*?\*\//g, "");

    // remove whitespace and newlines
    css = css.replace(/\s+/g, "").replace(/\n/g, "");

    // remove leading/trailing whitespace
    css = css.trim();

    setResultCSS(css);
  };
  // State to store the selected programming language
  // const [language, setLanguage] = useState('');
    const [input, setInput] = useState("");
  const [language, setLanguage] = useState(defaultLanguage);
  const [usetheme, setUseTheme] = useState(defaultTheme);

  // Ref to store the textarea element
//   const textareaRef = useRef(null);

//   // Event handler for selecting a programming language
//   const handleLanguageChange = (e) => {
//     setLanguage(e.target.value);
//   };

//       useEffect(() => {
//     console.log(code);
//     Prism.highlightAll();
//     }, [language, code]);

//   function updateCode(text) {
//   let result_element = document.querySelector("#highlighting-content");
//   // Update code
//   result_element.innerText = text;
//   // Syntax Highlight
//   Prism.highlightElement(result_element);
// }
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.outerdiv}>
        <div className={classes.mainContentDiv}>
          <div className={classes.topDiv}>
            <Typography variant="h4" align="left" marginY={5} fontWeight={700}>
              Code To Image Generator
            </Typography>
            <div>
              <Dropdown
          defaultTheme={defaultLanguage}
          onChange={(e) => setLanguage(e.target.value)}
          data={languages}
        />
        <Dropdown
          defaultTheme={defaultTheme}
          onChange={(e) => setUseTheme(e.target.value)}
          data={themes}
        />
            </div>
            <Paper elevation={3} className={classes.paper}>
              <div className={classes.outerTextfieldDiv}>
                <div className={classes.background}>
                  <div className={classes.window}>
                    <div className={classes.firstDot} />
                    <div className={classes.secondDot} />
                    <div className={classes.thirdDot} />
                  </div>
                 
        {/* <TextField
                    id="outlined-multiline-static"
                    multiline
                    value={code}
                    fullWidth
                    placeholder="// Paste your code here...."
                    required
                    classes={{ root: classes.textField }}
                    onChange={(e) => updateCode(e.target.value)}
                    // inputRef={textareaRef} 
                    // className={`language-${language}`}
                    //  className={'language-javascript'}
        //               inputRef={textareaRef}
        // multiline
        // rows={8}
        // variant="outlined"
        // fullWidth
                  />
                  <pre className="code-output">
          <code id="highlighting-content" className={'language-javascript'}></code>
        </pre> */}
        <Editor
          placeHolder="Type your code here..."
          onChange={(e) => setInput(e.target.value)}
        />
        <Highlighter language={language} theme={themes[usetheme]}>
          {input}
        </Highlighter>
                </div>

              </div>
            </Paper>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default CodeToImageGenerator;