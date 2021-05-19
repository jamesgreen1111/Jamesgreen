import React, { Component } from 'react';
import classes from './AboutMe.module.css';

import Img from '../../Images/meImg.png';

class AboutMe extends Component {
    render() {
        return (
            <div>
                <div className={classes.ImgContainer}>
                    <div className={classes.Greenbox}>
                        <img className={classes.Img} src={Img} height="200px"></img>
                    </div>
                </div>

                <div className={classes.AboutMeText}>
                    <h2 className={classes.h2}>Who Am I ?</h2>
                    <p>I am open to positions as of June 2021 when I graduate. 
                        My skills lay heavily in UI and Front-End development. 
                        I am currently learning and creating personal projects 
                        in React to develop my skills. </p>

                        <h2 className={classes.h2}>Persnal/Soft Skills</h2>
                    <p>These skills can be heavily underated even though I feel they are the hardest to come by. 
                        Adaptation is an area I am strong in, adapting under pressure or group dynamics to produce the best outcome. 
                        I am always trying to develop as a person meaning taking on situations I feel uncompfortable in. </p>

                        <h2 className={classes.h2}>Education</h2>
                    <p>I started in Graphic design seven years ago working mainly with illustration and branding, 
                        from there I studied Graphic design at College. However I knew I wanted more which is why when coming to Brunel university 
                        I decided to develop my skills in UI and Front-End development</p>
                </div>
            </div>
        )
    }
}
export default AboutMe;