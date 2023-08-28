import React from 'react';
import {AiFillStar} from 'react-icons/Ai'
import { getHostVans } from '../../api'

export default function Dashboard() {
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
        return <section
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
        </section>
    })
    
    
    return (
        <div className="dashboard-container">
            <div className="dashboard-income">
                <h2>Welcome!</h2>
                <p>Your income in last <b>30days</b></p>
                <h1>$2,260</h1>
            </div>
            <div className="dashboard-review">
                <h2>Review Score</h2> <AiFillStar/><b>5.0</b> /5
            </div>
           
            <h1 className="host-vans-title">Your listed vans</h1>
            <div className="host-vans-list">
            {allHostVans}
            </div>
        </div>
    )
};