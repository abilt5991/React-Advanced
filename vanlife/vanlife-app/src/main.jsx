import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Vans from './vans/Vans'
import VanData from './vans/VanData'
import Login from './pages/Login'
import Authentication from './pages/Authentication'


import "./server"
import Layout from "./components/Layout"
import HostLayout from "./components/HostLayout"
import VanInfoLayout from "./components/VanInfoLayout"
import ErrorPage from './ErrorPage'

import Dashboard from './pages/Host/Dashboard'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'
import VansList from './pages/Host/VansList'
import Details from './pages/Host/VanInfo/Details'
import Photos from './pages/Host/VanInfo/Photos'
import Pricing from './pages/Host/VanInfo/Pricing'

import './index.css'

function App(){
    
    const isLoggedIn = localStorage.getItem("loggedin")
    
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="vans" element={<Vans/>}/>
                <Route path="vans/:id" element={<VanData/>}/>
                <Route path="login" element={<Login />} />
                
                
                <Route element={<Authentication/>}>
                    <Route path="host" element={<HostLayout/>}>
                        <Route index element={<Dashboard/>}/>
                        <Route path="income" element={<Income/>}/>
                        <Route path="reviews" element={<Reviews/>}/>
                        <Route path="vanslist" element={<VansList/>}/>

                        <Route path="vanslist/:id" element={<VanInfoLayout/>}>
                            <Route index element={<Details/>}></Route>
                            <Route path="pricing" element={<Pricing/>}></Route>
                            <Route path="photos" element={<Photos/>}></Route>
                        </Route>
                    </Route>
                </Route>
            </Route>
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>
    </BrowserRouter>
    )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App/>)