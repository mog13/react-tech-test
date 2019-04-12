import React, { Component } from 'react';
import './BasicInfo.scss';

class BasicInfo extends Component {
    render() {
        return (
            <div className="BasicInfo">
                <ul>
                    <li><i className="icon far fa-user-circle"/> {this.props.username}</li>
                    <li><i className="icon far fa-envelope"/> {this.props.email}</li>
                    <li><i className="icon fas fa-phone"/> {this.props.phone}</li>
                    <li><i className="icon fas fa-globe"/> {this.props.website}</li>
                </ul>
            </div>
        );
    }
}

export default BasicInfo;
