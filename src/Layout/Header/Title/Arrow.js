import React from 'react';
import classes from './Arrow.module.css';

import Arrow from '../../../Images/up-arrow.png'

const UpArrow = (props) => (
    <div className={classes.Arrow}>
        <img src={Arrow} height='25px'onClick={props.IntroPageHandler}></img>
    </div>
);
export default UpArrow;