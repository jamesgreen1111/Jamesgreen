import React from 'react';
import { NavLink} from 'react-router-dom';

import classes from './Links.module.css';

const Links = (props) => (
    <div className={classes.Links}>
        <nav>
        <ul>
            <li><NavLink to="/" exact activeClassName={classes.active}>My Work</NavLink></li>
            <li><NavLink to="/MyStack" activeClassName={classes.active}>My Stack</NavLink></li>
            <li><NavLink to="/AboutMe" activeClassName={classes.active}>About Me</NavLink></li>
           
        </ul>
        </nav>
        
    </div>


);
export default Links;