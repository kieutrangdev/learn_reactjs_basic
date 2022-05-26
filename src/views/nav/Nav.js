import React, { Component } from 'react'
import './Nav.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export default class Nav extends Component {
  render() {
    return (
      // <Route>
        <div class="topnav">
          <a class="active" href="/">Home</a>
          <a href="/todo">To do</a>
        
      </div>
    // </Route>
    )
  }
}
