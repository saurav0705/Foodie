import React , {Component} from 'react';
import './App.css';
import Search from './components/SearchComponent';
import {Navbar ,  NavbarBrand } from 'reactstrap';

class App extends Component {
  constructor(props){
    super(props);
  }


  render(){
  return (
    <div>
    <Navbar dark color="primary">
        <NavbarBrand href="\">FOODIE</NavbarBrand>
      </Navbar>
    <div className="container-fluid">
     
     <Search />
  
    </div>
    </div>
  );}
}

export default App;
