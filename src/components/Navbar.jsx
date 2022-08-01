import {Link} from 'react-router-dom';
import React from 'react';

function Navbar({links}){
    return(
    <header>
        <nav>
            <ul>
                {
                links.map(
                    (link,i) => <li key={i}>
                        <Link to={link.href}>{link.label}</Link>
                    </li>
                    )
                }
            </ul>
        </nav>
    </header>
    )

}

export default Navbar;