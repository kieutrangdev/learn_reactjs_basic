import React, { Component } from 'react'
import './Nav.scss'
import {

  Link , NavLink
} from "react-router-dom";
export default class Nav extends Component {
  render() {
    return (
      // <Route>
        <div class="topnav">
          <NavLink to="/" activeClassName='active' exact={true}>Home</NavLink>
          <NavLink to="/todo" activeClassName='active'>To do</NavLink>
          {/* <Link to="/">Home</Link>
          <Link to="/todo">To do</Link> */}
 
       
        
      </div>
    // </Route>
    )
  }
}
