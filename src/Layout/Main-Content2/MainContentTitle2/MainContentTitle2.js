import React from 'react';

import classes from './MainContentTitle2.module.css';
import FillerImg from  '../../../Images/Arrow.png';

const MainContentTitleTwo = (props) => (
    <div className={classes.MainContentTitleTwo}>
        <h1 className={classes.h1}>Coded Projects</h1>
        <p className={classes.p}>Swipe to see catagories</p>
        <img  className={classes.Arrow} src={FillerImg} height="23px"/>
    </div>


);
export default MainContentTitleTwo;