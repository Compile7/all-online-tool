import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from "./containers/AppBar"
import SideBar from "./containers/SideBar"
import LandinPage from './components/LandingPage';
import {BrowserRouter as Router, Link, 
  Routes, Route} from 'react-router-dom'
import Routess from './Routes';

function App() {
  return (
    <div className="App">
      <Router>
      <AppBar />
      <SideBar/>
          <Routes >
          <Route path='/' element={<LandinPage />}/>
        {Routess?.map((val) => (
          <React.Fragment>
 <Route path={val.path} element={<val.component />} />
          {/* <Route path={val.path} element={val.component} /> */}
          {val?.child.map((v) => (
            <Route path={v.path} element={<v.component />} />
            ))}
          </React.Fragment>
          ))}
          </Routes>
      </Router>
    </div>
  );
}

export default App;
