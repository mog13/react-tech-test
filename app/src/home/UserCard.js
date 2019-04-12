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
                    <img className="profile-picture" src={logo}/>
                </div>
                <div className="overview--container">
                    <p data-hook="name">{this.props.name}</p>
                    <p data-hook="email">{this.props.email}</p>
                    <p data-hook="phone">{this.props.phone}</p>
                </div>
            </div>
        );
    }
}

export default UserCard;
