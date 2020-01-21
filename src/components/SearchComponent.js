import React , {Component} from 'react';
import { RESULT } from '../shared/chicken';
import { Card,CardBody,CardImg,CardText,CardImgOverlay,CardTitle } from 'reactstrap';


class Search extends Component{
    constructor(props){
        super(props);
        this.state = {
            results : RESULT,
        }
    }


    render(){
        //console.log(this.state.results.hits[0].recipe.label);
        const res = this.state.results.hits.map((result)=>{
            
            return (
                <div key={result.recipe.uri} className="col-12 col-sm-3 mt-2 mb-2  center border-black">
                <Card onClick = {()=>{ alert("clicked on "+result.recipe.label)}}>
                <CardTitle>{result.recipe.label}</CardTitle>
                <CardImg top src={result.recipe.image} alt={result.recipe.label} height="100px" width="90px"/>
                {/* <CardBody>
                    <CardText>{result.recipe.ingredientLines}</CardText>
                </CardBody> */}
                </Card>
                </div>
            );
        });
        return (
            <div className="row">
            {res}
            </div>
           
        );
    }
}

export default Search;