import React from 'react';
import {useParams, Link} from 'react-router-dom'
import { useOutletContext } from "react-router-dom";

export default function Details() {

    const {vanInfo} = useOutletContext();
    
    return (
            <img src={vanInfo.imageUrl} className="host-van-detail-image"/>
    )
};