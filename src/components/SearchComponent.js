import React , {Component} from 'react';
import { Card,CardImg,CardTitle } from 'reactstrap';
import Detail from './DetailComponent';


class Search extends Component{
    constructor(props){
        super(props);
        this.state = {
            results:this.props.results,
            loading:false,
            detail: this.props.detail,
            selectedRecipe:{},
        }
    }
    componentDidMount(){
        //console.log('mounted');
        this.setState({
            loading:this.props.loading
        })
        //console.log('loading------',this.state.loading);
    }

    

    RecipeDetail(recipe){
        //console.log(this.props);
        this.setState({
            detail:true,
            selectedRecipe:recipe
        })
        //this.props.detail=true;
        window.scrollTo(0,0);
        //this.props.history.push('/detail/');
    }
    renderResult(){
        
        ////console.log(this.props.results.hasOwnProperty('hits'))
        if(this.props.results.hasOwnProperty('hits'))
        {
            const res = this.props.results.hits.map((result)=>{
            
                return (
                    <div key={result.recipe.uri} className="col-12 col-md-3 mt-2 mb-2 center border-black">
                        <center>
                    <Card onClick = {()=>{ this.RecipeDetail(result.recipe)}} className="p-2">
                    <CardTitle className="text-center font-weight-bold text-uppercase">{result.recipe.label}</CardTitle>
                    <CardImg top src={result.recipe.image} alt={result.recipe.label} className="h-25" height="100px" width="90px"/>
                    {/* <CardBody>
                        <CardText>{result.recipe.ingredientLines}</CardText>
                    </CardBody> */}
                    </Card>
                    </center>
                    </div>
                );
            });
            return (
                <>{res}</>
            );

            
        }
        else{return(
               <></> );
        }
    }

    back(){
        this.setState({
           detail:false,
            selectedRecipe:{}
        })
        //this.props.detail=false;
        window.scrollTo(0,0);

    }
    render(){
        ////console.log(this.state.results.hits[0].recipe.label);
        return (
            <>
            <div className={this.state.detail ? 'd-none':'row mx-8'}>
            {this.renderResult()}
            
            </div>
            <div className={ !this.state.detail ? 'd-none':'row mx-8'}>
                <div className="col-12 mt-10 p-4 ">
                <a href="#" className="btn btn-primary" onClick={()=>{this.back()}}>Back</a>
                </div>
                <Detail recipe={this.state.selectedRecipe}/>
            </div>
            <div className={this.props.results.hasOwnProperty('hits') && this.props.results.hits.length !== 0 ? 'd-none':'d-block'}>
            <div className="intro w-100"><center>
               <h2>Welcome to Foodie Hai Hum</h2>
               <img alt="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLnm3pQuK-r4xN9feZ-2_fEyWi_bWang_0zwWK-Z3MT6tjhxFR" className="h-25 w-100 image"/></center></div>
               <div className={this.props.results.hasOwnProperty('hits') && this.props.results.hits.length === 0 ? 'd-block':'d-none'}>
                    <h3 className="text-center">No Recipe Found</h3>
               </div>
            </div>
            <div className={this.props.loading ? 'd-block':'d-none'}>
                <center>
                <div className="spin spinner-border text-success" role="status">
                <span className="sr-only">Loading...</span>
                </div>
                </center>
            </div>
           </>
        );
    }
}

export default Search;