import React from 'react';
import ReactDOM from 'react-dom/client';
import classes from './Header.module.css';

class Header extends React.Component {
    render() {
      return (
        <header className={classes.header}>
          <img className={classes.logo} src='https://cdn-icons-png.flaticon.com/512/545/545275.png' alt='Logo' />
        </header>
      );
    }
}

export default Header
