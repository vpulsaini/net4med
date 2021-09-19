import React from "react"
import { useLocation } from 'react-router-dom';

const AllConversationsActionBody = () => {
    const location = useLocation();
    console.log(location.hash.substr(1))
    
    return (
        <div>
           
        </div>
    )
}

export default AllConversationsActionBody
