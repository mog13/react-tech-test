import React, { Component } from 'react';
import './Error.scss';

class Error extends Component {
    render() {
        return (
            <div className="Error">
                <h2 className="message" data-hook="error"><span className="header">Error:</span> {this.props.error}</h2>
            </div>
        );
    }
}

export default Error;
