import React, {Component} from 'react';
import classes from './MainContent2.module.css';

import MainContentTitleTwo from './MainContentTitle2/MainContentTitle2';
import Project2 from './Project2/Project2';
class MainContentTwo extends Component {
    render () {
        return (
            <div className={classes.MainContent2}>
                <MainContentTitleTwo />
                <Project2 />
            </div>
        )
    }

}
export default MainContentTwo;