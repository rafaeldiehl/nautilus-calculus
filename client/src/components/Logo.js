import React from 'react';
import { Link } from 'react-router-dom';
import imageLogo from '../assets/logo_small.png'

function Logo() {
    return(
        <div className="logo">
            <h1>
                <Link to={{ pathname: '/' }}>
                    <img src={imageLogo} alt="Nautilus Calculus"></img>
                </Link>
            </h1>
        </div>
    )
}

export default Logo;