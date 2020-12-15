import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'

//Components


import Loginpage from './container/login'

import Signup from './container/signup'



class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>

                    <Route exact path="/login" component={Loginpage} />

                    <Route exact path="/register" component={Signup} />

                </Switch>
            </BrowserRouter>
        )

    }
}
export default Router;