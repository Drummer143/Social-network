import React from 'react';
import ReactDOM from 'react-dom/client';
import classes from './Friends.module.css';

class Friend extends React.Component {
    render() {
        return (
            <div className={classes.friend}>
                <div className={classes.info}>
                    <h3 className={classes.name}>Misha Arapov</h3>
                    <p className={classes.status}>I'm Misha</p>
                </div>
                <img src={this.props.avatar} alt='avatar' />
            </div>
        );
    }
}

class Friends extends React.Component {
    render() {
        return (
            <aside className={classes.friends}>
                <h1 className={classes.heading}>Friends</h1>
                <div className={classes.list}>
                    <Friend />
                </div>
            </aside>
        )
    }
}

export default Friends;