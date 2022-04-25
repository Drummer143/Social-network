import React from 'react';
import ReactDOM from 'react-dom/client';
import classes from "./PostsBlock.module.css"

class NewPost extends React.Component {
    render() {
        return (
            <div className={classes.new_post}>
                <textarea className={classes.text} maxLength={500} placeholder="discribe your day"></textarea>
                <button className={classes.file_button} type='button'>Add file</button>
                <button className={classes.publish_button}>Publish</button>
            </div>
        );
    }
}

class Post extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={classes.post}>
                <div className={classes.user}>
                    <img className={classes.avatar} src={this.props.avatar} alt='avatar' />
                    <div className={classes.user_text}>
                        <p><a className={classes.name} href='#'>{ this.props.name }</a></p>
                        <p className={classes.date}>{ this.props.date }</p>
                    </div>
                </div>

                <div className={classes.content}>
                    <p className={classes.contentText}>{ this.props.text }</p>
                    <img className={classes.contentImg} src={this.props.img} alt="img" />
                </div>

                {/* TODO: MAKE COMMENT SECTION */}
                {/*
                <div className={classes.comments}>
                    <textarea className={classes.addComment} /> 
                </div>
                */}
                {/* TODO: ADD BUTTONS LIKES AND REPOSTS */}
            </div>
        );
    }
}

{/* TODO: IDEA FOR POST STYLE: POST WITHOUT BACKGROUND AND THE LINE-DIVIDER BETWEEN POSTS */ }

class PostsBlock extends React.Component {
    render() {
        return (
            <div className={classes.posts}>
                <NewPost />
                <div className={classes.currPosts}>
                    <h1 className={classes.heading}>Your posts</h1>
                    <Post 
                        name="Evgeny Berg" 
                        avatar="https://sun9-48.userapi.com/s/v1/if2/csgQ0e1sx8Z6fLdlSoqv7HF9dlDQ8RbEzWvG9n0vQKID4ObWSrObeMVrJ7-R6T8IESraaN6lnRCnaAPH8hKF0zrB.jpg?size=736x736&quality=95&type=album"
                        date="25.04.2022"
                        text="I'm learning React!"
                        img="https://www.pvsm.ru/images/2016/07/18/React-v-brauzerah-i-na-mobilnyh-platformah.png"
                    />
                    <Post 
                        name="Evgeny Berg" 
                        avatar="https://sun9-48.userapi.com/s/v1/if2/csgQ0e1sx8Z6fLdlSoqv7HF9dlDQ8RbEzWvG9n0vQKID4ObWSrObeMVrJ7-R6T8IESraaN6lnRCnaAPH8hKF0zrB.jpg?size=736x736&quality=95&type=album"
                        date="24.04.2022"
                        text="Hello"
                        img=""
                    />
                </div>
            </div>
        );
    }
}

export default PostsBlock;