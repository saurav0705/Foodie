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
                <Card>
                <CardTitle>{result.recipe.label}</CardTitle>
                <CardImg top src={result.recipe.image} alt={result.recipe.label} height="100px" width="100px"/>
                <CardBody>
                    <CardText>{result.recipe.ingredientLines}</CardText>
                </CardBody>
                </Card>
            );
        });
        return (<div>
            <div className="col-12 col-md-5 mt-2 mb-2 center">
            {res}
            </div>
        </div>);
    }
}

export default Search;