import classes from './Layout.module.css';
import React, {Component} from 'react';
import { Route} from 'react-router-dom';
import Radium from 'radium';


import Header from './Header/Header';
import Swipeable from './AllContentSwipable/Swipable';
import HubPage from './Hubpage/HubPage';
import MySkills from './MySkills/MySkills';
import AboutMe from './AboutMe/AboutMe';
import Footer from './Footer/Footer';

import PortfolioProject from './Main-Content/Project1/PortfolioProject/PortfolioProject';
import HsbcProject from './Main-Content/Project1/HsbcProject/HsbcProject';
import AmbrosiaProject from './Main-Content/Project1/AmbrosiaProject/AmbrosiaProject';


class Layout extends Component {

    state = {
        IntroPage: true,

    }

    IntroPageHandler = () => {
        if (this.state.IntroPage === true) {
            this.setState({IntroPage: false});
        } else if (this.state.IntroPage === false) {
            this.setState({IntroPage: true});
        }

    }
    render() {
        return (
            
            <div className={classes.Layout}>

                <HubPage 
                IntroPageTrue={this.state.IntroPage}
                IntroPageHandler={this.IntroPageHandler} />

                
                <Header IntroPageHandler={this.IntroPageHandler} />

    <Route path="/" exact component={Swipeable} />
    <Route path="/Mystack" exact component={MySkills} />
    <Route path="/Aboutme" exact component={AboutMe} />

    <Route path="/PortfolioProject" exact component={PortfolioProject} />
    <Route path="/HSBCProject" exact component={HsbcProject} />
    <Route path="/AmbrosiaProject" exact component={AmbrosiaProject} />

    <Footer />


                
            </div>
        )
    }

};
export default Radium(Layout);


















/*
import classes from './Layout.module.css';
import React, {Component} from 'react';
import { Route, Navlink} from 'react-router-dom';

import Header from './Header/Header';
import MainContent from './Main-Content/MainContent';
import MainContentTwo from './Main-Content2/MainContent2';

class Layout extends Component {
    render() {
        return (
            <div className={classes.Layout}>
                <Header />
                

                <Route path="/" exact component={ MainContent } />
                <Route path="/MyWorkCoded" exact component={MainContentTwo} />
            </div>
        )
    }

};
export default Layout;

*/