import React from 'react';
import ReactDOM from 'react-dom/client';
import css_styles from "./Profile.module.css"

class About extends React.Component {
    render() {
        return (
            <div className={css_styles.profile}>
                <img
                    className={css_styles.avatar}
                    src='https://sun9-48.userapi.com/s/v1/if2/csgQ0e1sx8Z6fLdlSoqv7HF9dlDQ8RbEzWvG9n0vQKID4ObWSrObeMVrJ7-R6T8IESraaN6lnRCnaAPH8hKF0zrB.jpg?size=736x736&quality=95&type=album'
                    alt='Profile image'
                />
                <div className={css_styles.about}>
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

class NewPost extends React.Component {
    render() {
        return (
            <div className={css_styles.new_post}>
                <textarea className={css_styles.text} maxLength={500} placeholder="discribe your day"></textarea>
                <button className={css_styles.file_button} type='button'>Add file</button>
                <button className={css_styles.publish_button}>Publish</button>
            </div>
        );
    }
}

{/* TODO: IDEA FOR POST STYLE: POST WITHOUT BACKGROUND AND THE LINE-DIVIDER BETWEEN POSTS */ }

class Posts extends React.Component {
    render() {
        return (
            <div className={css_styles.posts}>
                <NewPost />
            </div>
        );
    }
}

class Profile extends React.Component {
    render() {
        return (
            <div className={css_styles.content}>
                <About />
                <Posts />
            </div>
        );
    }
}

export default Profile;