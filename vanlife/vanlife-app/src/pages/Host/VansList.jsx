import React from 'react';
import {Link} from 'react-router-dom'
import { getHostVans } from '../../api'

export default function VansList() {
    const [hostVans, setHostVans] = React.useState([])
    const [loading, setLoading] = React.useState(false)
     const [error, setError] = React.useState(null)
    

     React.useEffect(()=>{
         async function loadHostVans(){
             setLoading(true)
             try {
                 const data = await getHostVans()
                 setHostVans(data)
             } catch(err) {
                 setError(err)
             } finally {
                 setLoading(false)
             }
         }
         loadHostVans()
    }, [])
    
    
    
    const allHostVans = hostVans.map((van)=>{
        return <Link
            to={`${van.id}`}
            key={van.id}
            className="host-van-link-wrapper"
            >
            <div className="host-van-single" key={van.id}>
                <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                <div className="host-van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}/day</p>
                </div>
            </div>
        </Link>
    })
    
    if(loading) return <h2>Loading...</h2>
    if(error) return <h2>{error.message}</h2>
    
    return (
        <section>
            <h1 className="host-vans-title">Your listed vans</h1>
            <div className="host-vans-list">
                
            <section> {allHostVans} </section>

            </div>
        </section>
    )
};

        