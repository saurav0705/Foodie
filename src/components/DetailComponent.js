import React from 'react';
const Detail = (props) =>{

    if(props.recipe){
    return (<>
        <div className="col-12 col-md-6 mh-50 mw-50  p-4 rounded-circle">
            <div className="card crd" >
            <img className="card-img-top img-fluid disp" src={props.recipe.image} alt={props.recipe.label} />
            <div className="card-body">
                <h5 className="card-title btn btn-primary">{props.recipe.label}</h5>
            </div>
        </div>
        </div>
        <div className="col-12 col-md-6 mh-50 mw-50 p-4 disp">
        <div className="card" >
        <div className="card-header bg-warning text-white">
            Indegrediants
        </div>
        <ul className="list-group list-group-flush">
            {props.recipe.ingredientLines ? props.recipe.ingredientLines.map((ind)=>{
                return (<li className="list-group-item">{ind}</li>)
            }) : <></>}
        </ul>
        <a href={props.recipe.url} className="btn btn-primary" target="_blank">Recipe</a>
        </div>
        </div>
   </> );}
   else{
       return (<>
       </>);
   }
}


export default Detail;