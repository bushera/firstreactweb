
import React, {Fragment} from 'react';
import { Router } from 'react-router';
import './App.css';
import Home from './pages/home/Home.jsx' 
import Portfolio from './pages/porfolio/Portfolio.jsx';

class App extends React.Component {

 

  render(){
  return (

    <Fragment>
      <Home /> 
      <Portfolio />
    </Fragment>
 
  
  )

  }
}




export default App;
