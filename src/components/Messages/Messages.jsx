import React from 'react';
import ReactDOM from 'react-dom/client';
import classes from './Messages.module.css';

class Messages extends React.Component {
    render () {
        return (
            <div className={classes.dialogs}>
                <div className={classes.chat}>
                </div>
            </div>
        );
    }
}

export default Messages;