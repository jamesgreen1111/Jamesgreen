import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
import classes from './Footer.module.css';


class Footer extends Component {
    render () {
        return(
            <div className={classes.Container}>
                <div className={classes.Line}></div>

                <p>Created by James Green  ©   2021</p>
            </div>
        )
    }
}
export default Footer;