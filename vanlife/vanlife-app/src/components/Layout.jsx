import React, {creatContext} from 'react';
import {Outlet} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'


const LoginContext = React.createContext()

export default function Layout(){
    const [isLoggedIn, setIsLoggedIn] = React.useState(localStorage.getItem("loggedin"))

    return (
        <>
        <LoginContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
            <Header loggedIn={isLoggedIn} />
            <main>
                <Outlet setLoggedIn={isLoggedIn, setIsLoggedIn}/>
            </main>
        </LoginContext.Provider>
        <Footer/>
        </>
    )
}
export {LoginContext}