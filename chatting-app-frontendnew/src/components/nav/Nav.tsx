import React from 'react';
import logo from '../../images/logo.jpg';
import './nav.css';

const Nav = () => {
    return (
        <div className="nav">
            <div className="nav-blocks">
                <img src={logo} alt="img"></img>
            </div>
                <div className="nav-blocks"></div>
                <div className="nav-blocks"></div>
        </div>
    )
}

export default Nav;