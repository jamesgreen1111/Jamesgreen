import classes from './Project2.module.css';
import React from 'react';

import FillerImg from  '../../../Images/random.jpg';

const ProjectPageTwo = (props) => (
    <div>
        <img src={FillerImg} className={classes.img}/>
        <h1 className={classes.h1}>Site 1</h1>
        <p className={classes.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, <br></br>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
)
export default ProjectPageTwo;