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
            <div className="UserCard" onClick={()=>this.handleClick()}>
                <div className="profile-picture--container">
                    <img className="profile-picture" src={logo}/>
                </div>
                <div className="overview--container">
                    <h1 data-hook="name">{this.props.name}</h1>
                    <h1 data-hook="email">{this.props.email}</h1>
                    <h1 data-hook="phone">{this.props.phone}</h1>
                </div>
            </div>
        );
    }
}

export default UserCard;
