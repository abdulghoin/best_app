// import Packages
import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, IndexRedirect, hashHistory} from 'react-router'

// import Components
import LayOut from './layout/'
import Home from './pages/Home'
import SignUp from './pages/SignUp'

// DOM
const app = document.getElementById('app');
console.log(hashHistory);
// renderDOM
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={LayOut}>
      <IndexRoute component={Home} />
      <Route path='sign-up' component={SignUp} />
    </Route>
  </Router>
  , app);
