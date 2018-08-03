import {NavLink} from 'react-router-dom';
import React from 'react';

const Navigation = (props) =>{
        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <NavLink to="/home" className="navbar-brand" style={{color:'white'}}>Mahesh</NavLink>
                    <ul className="navbar-nav">
                    <li className="nav-item">
                    <NavLink activeClassName="selected" to="/youtube" className="nav-link">Youtube</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink activeClassName="selected" to="/fileaclaim" className="nav-link">File A Claim </NavLink>
                    </li>
                </ul>
            </nav>
        );
}

export default Navigation;