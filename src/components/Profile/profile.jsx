import React from 'react';
import ReactDOM from 'react-dom/client';
import classes from "./Profile.module.css"

import PostsBlock from '../PostsBlock/PostsBlock';

class About extends React.Component {
    render() {
        return (
            <div className={classes.profile}>
                <img
                    className={classes.avatar}
                    src='https://sun9-48.userapi.com/s/v1/if2/csgQ0e1sx8Z6fLdlSoqv7HF9dlDQ8RbEzWvG9n0vQKID4ObWSrObeMVrJ7-R6T8IESraaN6lnRCnaAPH8hKF0zrB.jpg?size=736x736&quality=95&type=album'
                    alt='Profile image'
                />
                <div className={classes.about}>
                    <h1>Evgeny Berg</h1>
                    <p>Birth date: 14 January 2001</p>
                    <p>Registration date: 25 April 2022</p>
                    <p>Friends: 0</p>
                    <p>Followers: 0</p>
                    <p>Following: 0</p>
                </div>
            </div>
        );
    }
}

class Profile extends React.Component {
    render() {
        return (
            <div className={classes.content}>
                <About />
                <PostsBlock />
            </div>
        );
    }
}

export default Profile;