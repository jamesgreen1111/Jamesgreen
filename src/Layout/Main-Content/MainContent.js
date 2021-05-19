import React, {Component} from 'react';
import classes from './MainContent.module.css';

import ProjectPageOne from './Project1/Project1';
class MainContent extends Component {
    render () {
        return (
            <div className={classes.MainContent}>
                
                <ProjectPageOne />
                

            </div>
        )
    }
}
export default MainContent;