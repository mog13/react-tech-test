import React, {Component} from 'react';
import logo from "../logo.svg";
import BasicInfo from "./BasicInfo";
import CompanyInfo from "./ComapnyInfo";
import "./UserPage.scss";
import {Map, Marker, Popup, TileLayer} from "react-leaflet";
class UserPage extends Component {

    state = {
        loading: true,
        user: [],
        error: null,
        lat: 51.505,
        lng: -0.09,
        zoom: 13,
    };

    componentDidMount() {
        this.fetchUsers();
    }

    fetchUsers() {
        fetch(`https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(data =>
                this.setState({
                    user: data,
                    loading: false,
                })
            )
            .catch(error => this.setState({ error, loading: false }));
    }

    render() {
        const { loading, user, error } = this.state;
        return (
            <div className="UserPage">
                <h1 className="title">{user.name}</h1>
            {/* @todo   ADD ERROR HANDLING*/}
                {!loading ? (
                    <div className="info--container">

                        <BasicInfo name={user.name} username={user.username} phone={user.phone} email={user.email} website={user.website}/>
                        <div className="profile-picture--container">
                            <img className="profile-picture" src={logo}/>
                        </div>
                        <CompanyInfo company={user.company}/>
                        <div className="map--container">
                            <Map className="map" center={user.address.geo} zoom={this.state.zoom}>
                                <TileLayer
                                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={user.address.geo}>
                                    <Popup>
                                        {user.address.street} {user.address.suite}
                                        <br />{user.address.city}
                                        <br />{user.address.zipcode}
                                    </Popup>
                                </Marker>
                            </Map>
                        </div>

                    </div>

        ):(
                    <h3>Loading...</h3>
                )}

            </div>)
    }
}

export default UserPage;
