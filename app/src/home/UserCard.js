import React, {Component} from 'react';
import logo from '../logo.svg';
import "./UserCard.scss";
import {Redirect} from "react-router-dom";

class UserCard extends Component {
    constructor(props) {
        super(props);
        this.state = {toUser: false};
    }


    handleClick = () => {
        this.setState( {
             toUser:true
        });
    };

    render() {
        if (this.state.toUser === true) {
            return <Redirect push to={`/users/${this.props.id}`}/>
        }

        return (
            <div className="UserCard " onClick={()=>this.handleClick()}>
                <div className="profile-picture--container">
                    <img className="profile-picture" src={logo} alt="Normally an avatar but for this app the react logo"/>
                </div>
                <ul className="overview--container">
                    <li className="name" data-hook="name">{this.props.name}</li>
                    <li className="email" data-hook="email">{this.props.email}</li>
                    <li className="phone" data-hook="phone">{this.props.phone}</li>
                </ul>
            </div>
        );
    }
}

export default UserCard;
