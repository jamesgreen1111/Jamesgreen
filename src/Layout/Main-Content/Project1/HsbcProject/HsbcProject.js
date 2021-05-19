import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
import classes from './HsbcProject.module.css';

import PortfolioImg from '../../../../Images/HSBC-Project.jpg';
import HSBCImg2 from '../../../../Images/HSBC-img2.jpg';
import HSBCImg3 from '../../../../Images/HSBC-img3.jpg';
import HSBCImg4 from '../../../../Images/HSBC-img4.jpg';

class HsbcProject extends Component {
    render () {
        return(
            <div className={classes.Container}>
            <h2 className={classes.Title}>HSBC App</h2>
            <img src={PortfolioImg} className={classes.Img}></img>

            <ul className={classes.Skills}>
                <li>UI</li>
                <li>Invision</li>
            </ul>
            <h3 className={classes.Titles}>Introduction</h3>
                <p className={classes.Para}>This was a University live brief in which we were tasked with developing the UI 
                for HSBC’s Private Banking sector. This meant upholding their brand guidelines in areas such as colour and 
                typeface. The app we were creating had to allow the user to see their investments as well as their accounts 
                and information on them. This meant gaining a deeper understanding of how these kinds of apps work.</p>

            <img src={HSBCImg2} className={classes.Img}></img>
                    <h3 className={classes.Titles}>UI Development</h3>
                <p className={classes.Para}>The above image shows the development process I took when producing the style of 
                the UI for my app. I tried out different colours and layouts shown in their other apps to try and keep some 
                consistency. But eventually found a modern layout style that I wanted to pursue. This was the idea of 
                including 3D virtual cards that the user can quickly slide through. My aim when designing this was to keep 
                it as simple as possible so not to confuse the user. I crafted the design of the page perfectly to make it 
                easily understandable. I made sure that all the content was accessible from the homepage so the user would 
                not get lost endlessly clicking through pages. In the bottom line of UI I am mainly trying to develop the 
                colours to a more pleasing state.</p>

                <img src={HSBCImg3} className={classes.Img}></img>
                    <h3 className={classes.Titles}>Wireframes</h3>
                <p className={classes.Para}>Here are some wireframes that give an example of the process I took before 
                developing the final UI. The reason for doing this was to check for any sections that perhaps didn’t flow 
                or work; it would also allow me to make sure that all the pages are well aligned.</p>

                <img src={HSBCImg4} className={classes.Img}></img>
                    <h3 className={classes.Titles}>Final UI</h3>
                <p className={classes.Para}>This final image shows the final artefact produced for this project. I feel the 
                designs accurately reflect the HSBC brand. One challenge I had to overcome when working on this project was 
                keeping to very specific guidelines in the design, before this project I was quite used to producing design 
                based on what I found visually pleasing, however this change of pace allowed me to develop my skills in 
                creating work for a tighter brief. One thing I would have liked to have developed on this project would have 
                been creating more elements such as a video or detailed animations to push my concept further.</p>

            <NavLink to="/" exact className={classes.link} ><p className={classes.Link}>Back to projects</p></NavLink>
            <div className={classes.space}></div>
        </div>
        )
    }
}
export default HsbcProject;