import React, { Component } from 'react';
import './NotFound.scss';

class NotFound extends Component {
    render() {
        return (
            <div className="NotFound">
                <h2 className="message"><span className="code">404: </span>page not found</h2>
            </div>
        );
    }
}

export default NotFound;
