import React from 'react'
import Navbar from '../components/Navbar';
const Requests = () => {
    return (
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'50vh'}}>
           <Navbar location='requests' />
            <h1>
               Requests
                </h1>
        </div>

    )
}

export default Requests