import React from 'react';
import Home from './Pages/Home';
import About from './Pages/About';
import Careers from './Pages/Careers';
import Gallery from './Pages/Gallery';
import Contact from './Pages/Contact'; 
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import Sidenavmenubar from './Components/Sidenavmenubar';
// import { Switch } from '@mui/material';

function App() {
  return (
    <Router>
    <Sidenavmenubar/>
      <Routes>
      <Route path = '/' component = {Home}/>
        <Route path = '/about' component = {About}/>
        <Route path = '/careers' component = {Careers} />
        <Route path = '/gallery' component = {Gallery} />
        <Route path = '/contact' component = {Contact} />
        <Route component = {Home}/>
      </Routes>
    
    </Router>
  )
}

export default App;