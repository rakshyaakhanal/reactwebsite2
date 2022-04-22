import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './ReactWebsite/Navbar.js';
import Home from './ReactWebsite/pages/Home.js';
import Services from './ReactWebsite/pages/Services.js';
import Products from './ReactWebsite/pages/Products.js';
import SignUp from './ReactWebsite/pages/SignUp.js';



const App = () => {
    return(
        <>
        <Router>
            <Navbar />
            <Switch>
                <Route path='/' exact component= {Home} />
                <Route path='/services' exact component= {Services} />
                <Route path='/products' exact component= {Products} />
                <Route path='/sign-up' exact component= {SignUp} />
            </Switch>
        </Router>
        </>
    )
}

export default App;