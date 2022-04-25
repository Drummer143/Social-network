import React from 'react';
import ReactDOM from 'react-dom/client';
import classes from './Friends.module.css';

import { NavLink } from "react-router-dom";

class Friend extends React.Component {
    render() {
        return (
            <div className={classes.friend}>
                <NavLink to='./../Messages/Messages'><button className={classes.write} type='button'>Write</button></NavLink>
                <h3 className={classes.name}>{ this.props.name }</h3>
                <img className={classes.avatar} src={this.props.avatar} alt='avatar' />
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
                    <NavLink className={classes.link} to='./../profile/Profile'>
                        <Friend 
                            name='Misha Arapov'
                            avatar='https://sun2.informsvyaz.userapi.com/s/v1/ig2/sG6Y4L08KDSgCZcP-XoJzjf0Q_Ub6CTYy9v1u3GLRCDJVQNMHzVk4NTzMO_V1YGkmSBFOoADYMDPYxK0wB8E8e5j.jpg?size=200x200&quality=96&crop=5,101,1037,1037&ava=1'
                        />
                    </NavLink>
                    <NavLink className={classes.link} to='./../profile/Profile'>
                        <Friend
                        name='Alexey Abramov'
                        avatar='https://sun2.informsvyaz.userapi.com/s/v1/ig2/34YDrWoINGgIntWLdHhDZXc6rpWvetWdmYmV0wiLgpnR6tquyetPBN9rHuxXllgw3A5zKjgBTzmsJV_OBY7l10_O.jpg?size=200x299&quality=96&crop=0,4,598,896&ava=1'
                        />
                    </NavLink>
                </div>
            </aside>
        )
    }
}

export default Friends;