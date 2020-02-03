import React, { Component } from "react";
import { MDBCol, MDBIcon } from "mdbreact";
import fetch from 'isomorphic-fetch';
import Search from './SearchComponent';

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state= {
      search :'',
      data:{},
      loading:false
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
    this.setState({ search: event.target.value })
  }
  async searchResult(event){
    
    var code = event.keyCode || event.which;
    if(code === 13) { //13 is the enter keycode
      console.log(this.state.search);  //Do stuff in here
      this.setState({loading:true});
      await fetch(`https://api.edamam.com/search?q=${this.state.search}&app_id=1a409636&app_key=832b995a946c06d3b30dab4fabdd1b66`)
        .then(response => response.json())
        .then((res)=>{
            //console.log("-----------------",res);
            console.log(res);
            this.setState({data:res});
            this.setState({loading:false});
            console.log(this.state.data)
        })
      
    }
     
  }

  render(){
  return (<>
    <MDBCol  className="bg-success w-100">
        <MDBIcon icon="search" className="pb-4"/>
        <input className="form-control form-control-sm ml-3 w-75 searchbar" type="text" value={this.state.search} onChange={this.handleChange} onKeyPress={(event)=>{this.searchResult(event)}} placeholder="Search Your Dish ....." aria-label="Search" />
           <div className="test"></div>
    </MDBCol>
    <div className="container-fluid">
      <Search results={this.state.data} loading={this.state.loading}/> 
    </div>
    </>
  );
}

}

export default SearchBar;