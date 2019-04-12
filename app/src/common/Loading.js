import React, { Component } from 'react';
import './Loading.scss';

class Loading extends Component {
    render() {
        return (
            <div className="Loading">
                <i className="icon fas fa-cog fa-4x"/>
                <h2 className="message">Loading</h2>
            </div>
        );
    }
}

export default Loading;
