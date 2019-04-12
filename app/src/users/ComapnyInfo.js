import React, { Component } from 'react';
import './CompanyInfo.scss';

class CompanyInfo extends Component {
    render() {
        return (
            <div className="CompanyInfo">
                <h1 className="company-name">{this.props.company.name}</h1>
                <h4 className="company-phrase">-"{this.props.company.catchPhrase}"</h4>
                <p className="company-bs">{this.props.company.bs}</p>
            </div>
        );
    }
}

export default CompanyInfo;
