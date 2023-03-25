import React from 'react';
import {Link} from 'react-router-dom';


const Navbar = () => {
    return (
        <div>
            <h1>Vortex RR HH</h1>
            <ul>
                <li>
                     <Link to={'/'}> HOME </Link> 
                </li>
                 <li>
                    <Link to={'/employees'}> EMPLOYEES </Link> 
                </li>
                <li>
                    <Link to={'/assets'}> ASSETS </Link> 
                 </li>

            </ul>
        </div>
    );
};

export default Navbar;





