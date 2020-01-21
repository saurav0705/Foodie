import React , {Component} from 'react';
import './App.css';
import Search from './components/SearchComponent';
import {Navbar ,  NavbarBrand ,NavItem } from 'reactstrap';
import SearchBar from './components/SearchBarComponent';

class App extends Component {
  constructor(props){
    super(props);
  }


  render(){
  return (
    <div>
    <Navbar dark color="primary">
        <NavbarBrand href="\" ><img src=""/> FOODIE</NavbarBrand>
          <SearchBar />

      </Navbar>
    <div className="container-fluid">
     
     <Search />
  
    </div>
    </div>
  );}
}

export default App;
