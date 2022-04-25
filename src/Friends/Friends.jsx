import React from 'react';
import ReactDOM from 'react-dom/client';
import css_styles from './Friends.module.css';

class Friends extends React.Component {
    render() {
        return (
            <aside className={css_styles.friends}>
                <h1 className={css_styles.heading}>Friends</h1>
            </aside>
        )
    }
}

export default Friends;