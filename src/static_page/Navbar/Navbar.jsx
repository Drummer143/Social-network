import React from 'react';
import ReactDOM from 'react-dom/client';
import css_styles from './Navbar.module.css';

class Navbar extends React.Component {
    render() {
        return (
            <nav className={css_styles.nav}>
                <ul className={css_styles.nav_list}>
                    <li><a className={css_styles.link} href='#'>Profile</a></li>
                    <li><a className={css_styles.link} href='#'>News</a></li>
                    <li><a className={css_styles.link} href='#'>Messages</a></li>
                    <li><a className={css_styles.link} href='#'>Music</a></li>
                    <li><a className={css_styles.link} href='#'>Settings</a></li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;