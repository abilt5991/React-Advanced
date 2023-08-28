import React from 'react';
import {NavLink} from 'react-router-dom'
import {Outlet} from 'react-router-dom'

export default function HostLayout(){
    
    
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
         color: "#4B6587"
       
    }
    
    return (
        <>
             <nav className="host-nav">
                <NavLink to="."
                    end
                    style={({ isActive }) => isActive ? activeStyles : null}
                    >Dashboard</NavLink>
                <NavLink to="income"
                    style={({ isActive }) => isActive ? activeStyles : null}>Income</NavLink>
                <NavLink to="vanslist"
                    style={({ isActive }) => isActive ? activeStyles : null}>Vans</NavLink>
                <NavLink to="reviews"
                    style={({isActive})=> isActive? activeStyles : null}>Reviews</NavLink>
            </nav>
            <Outlet />
        </>
    )
}





