import React, { Component } from 'react';
import './CompanyInfo.scss';

class CompanyInfo extends Component {
    render() {
        return (
            <div className="CompanyInfo">
                <h1>{this.props.company.name}</h1>
                <h4>{this.props.company.catchPhrase}</h4>
                <p>{this.props.company.bs}</p>
            </div>
        );
    }
}

export default CompanyInfo;
