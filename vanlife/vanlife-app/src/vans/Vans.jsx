import React from 'react';
import { Link, useSearchParams } from "react-router-dom"
import {getVans} from "../api"

import "../index.css"

export default function Vans() {
    
    const [vansData, setVansData] = React.useState([])
    
    const [searchParams, setSearchParams] = useSearchParams()
    
    const filterKey = searchParams.get("type")
    
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    
    React.useEffect(()=>{
           async function loadVans(){
               setLoading(true)
               try {
                   const data = await getVans()
                    setVansData(data)
               } catch(error) {
                   setError(error)
                } finally {
                    setLoading(false)
                }
           }
        loadVans()
    }, [])
    
    
    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error.message}</h1>
    }
    
    const filteredVans = filterKey ? vansData.filter(van => van.type.toLowerCase() == filterKey.toLowerCase()) : vansData
    
    const allVans = filteredVans.map((van)=> {
        return  <div key={van.id} className="van-tile">
                   <Link to={`${van.id}`} state={{searchparams: searchParams.toString(), type: filterKey }}> <img src={van.imageUrl} />
                    <div className="van-info">
                        <h3>{van.name}</h3>
                        <p>${van.price}<span>/day</span></p>
                    </div>
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                     </Link>
                </div>
    })
    
    
    
    return (
        
       <div className="van-list-container">
            <div className="van-list-filter-buttons">
                
                <button className={`van-type simple ${filterKey == "simple"? "selected": ""}`}
                    onClick={()=>setSearchParams({type: "simple"})}>Simple</button>
                
                <button className={`van-type simple ${filterKey == "rugged"? "selected": ""}`}
                    onClick={()=>setSearchParams({type: "rugged"})}>Rugged</button>
                
                <button className={`van-type simple ${filterKey == "luxury"? "selected": ""}`}
                    onClick={()=>setSearchParams({type: "luxury"})}>Luxury</button>
               {filterKey && <button onClick={()=>setSearchParams({})}>Clear</button> }
                

            </div>
             <h1>Explore our van options</h1>
            <div className="van-list">
                {allVans}
            </div>
        </div>
    )
};