import classes from './Project1.module.css';
import React from 'react';
import { NavLink} from 'react-router-dom';

import PortfolioImg from  '../../../Images/PortfolioImg.jpg';
import HSBCProject from '../../../Images/HSBC-Project.jpg';
import AmbrosiaCover from '../../../Images/Ambrosia-Cover.jpg';
import FillerImg from  '../../../Images/Arrow.png';

const ProjectPageOne = (props) => (
<div>
    <div className={classes.MainContentTitle}>
    <h2 className={classes.LatestHeader}>Latest</h2>
    <p className={classes.Swipe}>Swipe here to see catagories</p>
    <img  className={classes.Arrow} src={FillerImg} height="23px"/>
   </div>

    <div className={classes.Latest}>
        {/* Portfolio Project */}
        <NavLink className={classes.PortfolioLink} to="/PortfolioProject" exact>
        <div className={classes.ProjectContainer}>
        <img src={PortfolioImg} className={classes.img}/>

        <div className={classes.Skills}>
            <div className={classes.TitleDate}>
            <h1 className={classes.Title}>Portfolio Site .</h1>
            <p className={classes.date}>2021</p>
            </div>
        <ul>
            <li>React</li>
            <li>UI</li>
        </ul>
        </div>

        <p className={classes.Paragraph}>This is my latest project. I created my Portfoio in React.</p>
            
            </div>
        </NavLink>

                {/* Ambrosia Project */}
                <NavLink className={classes.PortfolioLink} to="/AmbrosiaProject" exact>
        <div className={classes.ProjectContainer}>
        <img src={AmbrosiaCover} className={classes.img}/>

        <div className={classes.Skills}>
            <div className={classes.TitleDate}>
            <h1 className={classes.Title}>Ambrosia 360° Campaign .</h1>
            <p className={classes.date}>2021</p>
            </div>
        <ul>
            <li>Branding</li>
            <li>Package Design</li>
            <li>Photoshop</li>
        </ul>
        </div>

        <p className={classes.Paragraph}>A Marketing campaign on healthy energy drinks themed around Greek Gods.</p>
            
            </div>
        </NavLink>
    
            {/* Second Project */}
            <NavLink className={classes.HSBCLink} to="/HSBCProject" exact>
            <div className={classes.ProjectContainer}>
        <img src={HSBCProject} className={classes.img}/>

        <div className={classes.Skills}>
            <div className={classes.TitleDate}>
            <h1 className={classes.Title}>HSBC App Design .</h1>
            <p className={classes.date}>2020</p>
            </div>
        <ul>
            <li>UI</li>
            <li>Invision</li>
        </ul>
        </div>

        <p className={classes.Paragraph}>User Interface for an HSBC Private Banking app.</p>
            </div>
            </NavLink>
  
            

    </div>
    </div>
)
export default ProjectPageOne;