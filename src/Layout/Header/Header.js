import React, {Component} from 'react';
import classes from './Header.module.css';

import Title from './Title/Title';
import Links from './Links/Links';
const Header = (props) =>  (
            <div className={classes.Header}>
                <Title IntroPageHandler={props.IntroPageHandler} />
                <Links /> 
            </div>
            

        )

export default Header;