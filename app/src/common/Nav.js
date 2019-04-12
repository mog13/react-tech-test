import React, { Component } from 'react';
import './Nav.scss';
import {Redirect} from "react-router-dom";

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state={
            goHome:false
        }
    }

    handleClick = () => {
        //cannot use react router as outside root. Could bubble up to app but this achieves the same effect
        window.location.href = window.location.origin
            ? window.location.origin + '/'
            : window.location.protocol + '/' + window.location.host + '/';
    };

    render() {

        if (this.state.goHome === true) {
            return <Redirect push to={`/`}/>
        }

        return (
            <div className="Nav" onClick={()=>{this.handleClick()}}>
                <h1 className="title"> <i className="fas fa-users fa-x"/> React Users Dashboard</h1>
            </div>
        );
    }
}

export default Nav;
