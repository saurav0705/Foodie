import React , {Component} from 'react';
import './App.css';
import Search from './components/SearchComponent';

class App extends Component {
  constructor(props){
    super(props);
  }


  render(){
  return (
    <div className="container">
      <h1>FOODIE</h1>
      <div className="row">
     <Search />
     </div>
    </div>
  );}
}

export default App;
