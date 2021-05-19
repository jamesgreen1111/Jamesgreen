import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
import classes from './PortfolioProject.module.css';

import PortfolioImg from '../../../../Images/Portfolio-Front-Img.jpg';

class PortfolioProject extends Component {
    render () {
        return(
            <div className={classes.Container}>
                <h2 className={classes.Title}>Portfolio Website</h2>
                <img src={PortfolioImg} className={classes.Img}></img>

                <ul className={classes.Skills}>
                    <li>React</li>
                    <li>UI</li>
                </ul>

                <p className={classes.Para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                    dolore eu fugiat nulla pariatur. Excepteur.</p>

                <NavLink to="/" exact className={classes.link} ><p className={classes.Link}>Back to projects</p></NavLink>


            </div>
        )
    }
}
export default PortfolioProject;