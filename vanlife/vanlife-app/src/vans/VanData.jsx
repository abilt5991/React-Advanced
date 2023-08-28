import React from 'react';
import {useParams, Link, useLocation} from 'react-router-dom'
import "../index.css"


export default function Vans() {
    const params = useParams();
    const location = useLocation()
    const [van, setVan] = React.useState(null)

    
    React.useEffect(()=>{
        fetch(`/api/vans/${params.id}`) 
        .then(resp => resp.json())
        .then(data => setVan(data.vans))        
    },[params.id])
   
    
    const searchState = location.state && location.state.searchparams ? location.state.searchparams : ""
    const searchType = location.state && location.state.type ? location.state.type : ""
    
    return (
       <div className="van-list-container">
            <Link
                to={searchState ? "../?"+searchState : "../"}
                relative="path"
                className="back-button"
            >
             &larr; <span>Back to {searchType ? searchType : "all"} vans</span>
            
            </Link>
            
             {van ? ( <div className="van-detail">
                    <img src={van.imageUrl} />
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
                ) : <h2>Loading</h2>}
        </div>
    )
};