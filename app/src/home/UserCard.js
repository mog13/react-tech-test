import React, {Component} from 'react';
import logo from '../logo.svg';
import "./UserCard.scss";
class UserCard extends Component {
    render() {
        return (
            <div className="UserCard">
                <div className="profile-picture--container">
                    <img className="profile-picture" src={logo}/>
                </div>
                <div className="overview--container">
                    <h1 data-hook="name">{this.props.name}</h1>
                    <h1>{this.props.email}</h1>
                    <h1>{this.props.phone}</h1>

                </div>
            </div>
        );
    }
}

export default UserCard;
