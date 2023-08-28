import React, {useContext} from 'react';
import {NavLink, Link} from 'react-router-dom'
import { FaShuttleVan } from 'react-icons/fa';
import {HiUserCircle} from "react-icons/hi"
import {LuLogOut} from "react-icons/lu"
import {LoginContext} from './Layout'

export default function Header(){
    
    const {isLoggedIn, setIsLoggedIn} = useContext(LoginContext)
    
    
    function fakeLogOut() {
        localStorage.removeItem("loggedin")
        setIsLoggedIn(localStorage.getItem("loggedin"))
        alert("You are logged out")
    }

    return (
        <header>
            <Link to="/"><FaShuttleVan/>VANLIFE</Link>
            <nav>
                <NavLink to="/host"
                    className={({isActive})=> isActive? "headernav--active": null}
                    >Host</NavLink>
                <NavLink to="/about"
                    className={({isActive})=> isActive? "headernav--active": null}
                    >About</NavLink>
                <NavLink to="/vans"
                    className={({isActive})=> isActive? "headernav--active": null}
                    >Vans</NavLink>
                
               { isLoggedIn ? <button onClick={fakeLogOut}><LuLogOut/></button> :
                    <NavLink to="/login"
                    className={({isActive})=> isActive? "login-icon headernav--active": "login-icon"}
                    ><HiUserCircle/></NavLink>
                }
                    
            </nav>
        </header>
    )
}


