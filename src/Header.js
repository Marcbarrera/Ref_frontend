import React from 'react'
import {Link} from 'react-router-dom';


 function Header() {
    return (
        <div>
            <h1><Link to="/" className="text-light nav-link">REFERENCE</Link></h1>
            
        </div>
    )
}

export default Header;