import React from 'react';
import ReactDOM from 'react-dom/client';
import classes from './Navbar.module.css';

import { NavLink } from "react-router-dom";

let activeStyle = {
    textDecoration: "underline",
  };

class Navbar extends React.Component {
    render() {
        return (
            <nav className={classes.nav}>
                <ul className={classes.nav_list}>
                    <li><NavLink className={classes.link} to='/../../Profile/Profile'>Profile</NavLink></li>
                    <li><NavLink className={classes.link} to='#'>News</NavLink></li>
                    <li><NavLink className={classes.link} to='/../../Messages/Messages'>Messages</NavLink></li>
                    <li><NavLink className={classes.link} to='#'>Music</NavLink></li>
                    <li><NavLink className={classes.link} to='#'>Settings</NavLink></li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;