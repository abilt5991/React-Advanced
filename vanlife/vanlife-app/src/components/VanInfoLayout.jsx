import React from 'react';
import {useParams, Link} from 'react-router-dom'
import {NavLink} from 'react-router-dom'
import {Outlet} from 'react-router-dom'

export default function VansInfo() {
    const [vanInfo, setVanInfo] = React.useState(null)
    const vanid= useParams()
        
    React.useEffect(()=>{
        fetch(`/api/host/vans/${vanid.id}`)
        .then(resp => resp.json())
        .then(data => setVanInfo(data.vans))
    }, [])

    if (!vanInfo) {
        return <h1>Loading...</h1>
    }
    
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
         color: "#4B6587"
       
    }
    
    return (
        <section>
            <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>
            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={vanInfo.imageUrl} />
                    <div className="host-van-detail-info-text">
                        <i
                            className={`van-type van-type-${vanInfo.type}`}
                        >
                            {vanInfo.type}
                        </i>
                        <h3>{vanInfo.name}</h3>
                        <h4>${vanInfo.price}/day</h4>
                    </div>
                </div>
                
                
                <nav className="host-van-detail-nav">
                <NavLink to="."
                    path="relative"
                    end
                    style={({ isActive }) => isActive ? activeStyles : null}
                    >Details</NavLink>
                <NavLink to="pricing"
                    style={({ isActive }) => isActive ? activeStyles : null}>Pricing</NavLink>
                <NavLink to="photos"
                    style={({ isActive }) => isActive ? activeStyles : null}>Photos</NavLink>
                </nav>

                <Outlet context={{vanInfo}}/>
                
            </div>
        </section>

    )
};