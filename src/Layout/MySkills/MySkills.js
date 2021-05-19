import React, { Component } from 'react';
import classes from './MySkills.module.css';

import HTML from '../../Images/html.png';
import Css from '../../Images/css.png';
import Javascript from '../../Images/JS.png';
import react from '../../Images/react.png';
import Firebase from '../../Images/firebase.png';
import Node from '../../Images/node.png';

import Sketch from '../../Images/sketch.png';
import Photoshop from '../../Images/photoshop.png';
import Illustrator from '../../Images/illustrator.png';
import AfterEffects from '../../Images/aftereffects.png';
import Ux from '../../Images/ux.png';
import Ui from '../../Images/ui.png';


class MySkills extends Component {
    render() {
        return (
            <div>
            <div className={classes.SkillsIntro}>
                <p>I am open to positions as of June 2021 when I graduate. 
                   My skills lay heavily in UI and Front-End development. 
                   I am currently learning and creating personal projects 
                   in React to develop my skills. </p>
            </div>
            <h1>Tech Skills</h1>
            <div className={classes.TechSkills}>

                {/*HTML*/}
                <ul>

                <li>
                    <img src={HTML} width='20px'></img>
                </li>

                <li><p>HTML</p></li>
               

                {/*React*/}
                <li>
                    <img src={react} width='20px' className={classes.ReactImg}></img>
                </li>

                <li><p>React</p></li>
                </ul>
               

                {/*Css*/}
                <ul>
                <li>
                    <img src={Css} width='20px'></img>
                </li>
                <li><p>CSS</p></li>

                {/*Firebase*/}
                <li>
                    <img src={Firebase} width='20px' className={classes.FirebaseImg}></img>
                </li>
                <li><p>Firebase</p></li>
                </ul>



                {/*Javascript*/}
                <ul>
                <li>
                    <img src={Javascript} width='20px'></img>
                </li>
                <li><p>Javascript</p></li>
               



                {/*Node.js*/}          
                <li>
                    <img src={Node} width='20px' className={classes.NodeImg}></img>
                </li>
                <li><p>Node.js</p></li>
                </ul>
                

    

            </div>
            
            <h1>UI Skills</h1>
            <div className={classes.UISkills}>

                {/*Sketch*/}
                <ul>

                <li>
                    <img src={Sketch} width='20px'></img>
                </li>

                <li><p>Sketch</p></li>
               

                {/*AfterEffects*/}
                <li>
                    <img src={AfterEffects} width='20px' className={classes.AeImg}></img>
                </li>

                <li><p>AfterEffects</p></li>
                </ul>
               

                {/*Photoshop*/}
                <ul>
                <li>
                    <img src={Photoshop} width='20px'></img>
                </li>
                <li><p>Photoshop</p></li>

                {/*Ux*/}
                <li>
                    <img src={Ux} width='20px' className={classes.UxImg}></img>
                </li>
                <li><p>User Experience Design</p></li>
                </ul>



                {/*Illustrator*/}
                <ul>
                <li>
                    <img src={Illustrator} width='20px'></img>
                </li>
                <li><p>Illustrator</p></li>
               



                {/*UI*/}          
                <li>
                    <img src={Ui} width='20px' className={classes.UiImg}></img>
                </li>
                <li><p>User Inteferface Design</p></li>
                </ul>
                

    

            </div>
            <div className={classes.space}></div>
            </div>
        )
    }
}
export default MySkills;