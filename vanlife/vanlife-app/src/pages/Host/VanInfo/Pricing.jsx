import React from 'react';
import {useParams, Link} from 'react-router-dom'
import { useOutletContext } from "react-router-dom";

export default function Details() {

    const {vanInfo} = useOutletContext();
    
    return (
        <h3 className="host-van-price">${vanInfo.price}<span>/day</span></h3>
    )
};