import React from 'react';
import ReactDOM from 'react-dom/client';
import classes from './Messages.module.css';

class Message extends React.Component {
    render() {
        return (
            <div className={classes.message}>
                <p className={classes.text}>{/* { this.props.text } */}g</p>
            </div>
        );
    }
}

class Messages extends React.Component {
    render () {
        return (
            <div className={classes.dialogs}>
                <div className={classes.chat}>
                    <Message />
                </div>
            </div>
        );
    }
}

export default Messages;