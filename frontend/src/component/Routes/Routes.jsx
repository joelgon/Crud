import React from 'react'
//import {BrowserRouter as Router, Route, Switch, } from 'react-router-dom'
import {Router, Route, Redirect} from 'react-router'
import{createBrowserHistory} from 'history'

import Listar from '../Listar/Listar'
import Cadastrar from '../Cadastrar/Cadastrar'

const history = createBrowserHistory();
export default props =>(
    
    <Router history={history} >
        <Route exact path="/">
            <Redirect to="/listar" />
        </Route>
        <Route path="/listar" component={Listar} />
        <Route path="/cadastrar" component={Cadastrar} />
    </Router>
)