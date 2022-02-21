import React from "react";
import LogIn from "./login";
import Home from './home';
import ErrorPage from './pageNotFound';
import HeaderOfCategory from './headerOfCategory'
import {
    Mathematics,
    English,
    Physics,
    Chemistry,
    Biology,
    Geography,
    Economics,
    Government,
    History,
    Hausa,
    Islamic,
    EnglishLiterature,
    CivilEducation
} from './subjects/subjects';

import {
    HashRouter,
    Route,
    Switch
} from 'react-router-dom';




const RouterComponent = () => {

    return (
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={LogIn} />
                    <Route path="/home" component={Home} />
                    <Route path="/headOfCategory" component={HeaderOfCategory} />
                    <Route path="/mathematics" component={Mathematics} />
                    <Route path="/english" component={English} />
                    <Route path="/physics" component={Physics} />
                    <Route path="/chemistry" component={Chemistry} />
                    <Route path="/biology" component={Biology} />
                    <Route path="/geography" component={Geography} />
                    <Route path="/economics" component={Economics} />
                    <Route path="/government" component={Government} />
                    <Route path="/history" component={History} />
                    <Route path="/hausa" component={Hausa} />
                    <Route path="/islamic" component={Islamic} />
                    <Route path="/englishLiterature" component={EnglishLiterature} />
                    <Route path="/civilEducation" component={CivilEducation} />
                    <Route component={ErrorPage} />
                </Switch>
             </HashRouter>
    )
}


export default RouterComponent;