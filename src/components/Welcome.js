import React from 'react'
import {Link} from 'react-router-dom'
import '../assets/css/Welcome.css'

export default function Welcome(){
    return(
        <div>
            <Link to='/Mesero'>Mesero</Link> <br></br>
            <Link to='/Chef'>Chef</Link> <br></br>
            <Link to='/Admin'>Admin</Link>
        </div>
    )

}