import React from 'react'
import { Link } from 'react-router-dom';

import { appRoutes } from '../../utils/routes';

const Navbar = () => {
    return (
        <div>
            <Link to={appRoutes.HOME}><li>Home</li></Link>
            <Link to={appRoutes.SERVICES}><li>Services</li></Link>
            <Link to={appRoutes.TEAMS}><li>Teams</li></Link>
            <Link to={appRoutes.PORTFOLIO}><li>Portfolio</li></Link>
            <Link to={appRoutes.WHY_CHOOSE_US}><li>Why Choose us?</li></Link>
            <Link to={appRoutes.CONTACT}><li>Contact</li></Link>
            <Link to={appRoutes.HIRE_US}><li>Hire Us</li></Link>
        </div>
    )
}

export default Navbar
