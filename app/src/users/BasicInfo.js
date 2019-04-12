import React, { Component } from 'react';
import './BasicInfo.scss';

class BasicInfo extends Component {
    render() {
        return (
            <div className="BasicInfo">
                <h1>{this.props.name}</h1>
                <ul>
                    <li>{this.props.username}</li>
                    <li>{this.props.email}</li>
                    <li>{this.props.phone}</li>
                    <li>{this.props.website}</li>
                </ul>
            </div>
        );
    }
}

export default BasicInfo;
