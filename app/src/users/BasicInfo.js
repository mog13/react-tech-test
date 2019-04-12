import React, { Component } from 'react';
import './BasicInfo.scss';

class BasicInfo extends Component {
    render() {
        return (
            <div className="BasicInfo">
                <ul>
                    <li className="info"><i className="icon far fa-user-circle"/> {this.props.username}</li>
                    <li className="info" ><a href={`mailto:${this.props.email}`}><i className="icon far fa-envelope"/> {this.props.email}</a></li>
                    <li className="info"><a href={`tel:${this.props.phone}`}><i className="icon fas fa-phone"/> {this.props.phone}</a></li>
                    <li className="info"><a href={`http://${this.props.website}`} target="_blank"><i className="icon fas fa-globe"/> {this.props.website}</a></li>
                </ul>
            </div>
        );
    }
}

export default BasicInfo;
