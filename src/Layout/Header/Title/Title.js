import React, {Component} from 'react';
import classes from './Title.module.css';

import Logo from './Logo';
import UpArrow from './Arrow';

const Title = (props) => (
            <div className={classes.Title}>
                
                <UpArrow IntroPageHandler={props.IntroPageHandler} />

            </div>
        )
export default Title;