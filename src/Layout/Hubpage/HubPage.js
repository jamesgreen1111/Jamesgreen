import React from 'react';
import classes from './HubPage.module.css';
import Radium from 'radium';

import me from '../../Images/me.png';
import instagram from '../../Images/insta.png';
import linkedin from '../../Images/linkedin.png';
import git from '../../Images/Git.png';
import mail from '../../Images/mail.png';

import img from '../../Images/down-arrow.png';
const HubPage = (props) => (
            <div className={ props.IntroPageTrue ? classes.HubPageTrue : classes.HubPageFalse }>
                <div className={classes.Pattern}>
  
                <img src={me} className={classes.me}></img>
                <h1 className={classes.IntroTitle}>I'm James Green</h1>
                <p className={classes.Intro}>I specialise in Front-End Development and Web Technologies creating digital products. Making the future a reality.</p>

                <div className={classes.links}>
                <img src={instagram} width="50px" height="50px"></img>
                <img src={linkedin} width="50px" height="50px"></img>
                <img src={git} width="50px" height="50px"></img>
                <img src={mail} width="50px" height="50px"></img>
                </div>

                <div className={classes.ButtonExplore} onClick={props.IntroPageHandler}><p className={classes.p}>Explore</p></div>
                <img src={img} className={classes.DownArrow} height='25px' onClick={props.IntroPageHandler}></img>
                </div>
            </div>
        )
    


export default Radium(HubPage);