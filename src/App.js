import React , {Component} from 'react';
import './App.css';

import {Navbar} from 'reactstrap';
import SearchBar from './components/SearchBarComponent';

class App extends Component {
  


  render(){
  return (
    
    <div className="main">
      <center>
    <Navbar dark color="primary" className="bg-success">
      
        <span className="font-weight-bold justify-center head ml-4 title text-white w-100"><h1><center>FOODIE HAI HUM</center></h1></span>
        
        </Navbar>
        <SearchBar />
        <div className="container-fluid">
        <div className="row">
        
        </div>
        </div>
          

      
        </center>
    </div>
  );}
}

export default App;
