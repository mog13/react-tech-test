import React, { Component } from 'react';
import UserCard from "./UserCard";

import "./HomePage.scss";
import Loading from "../common/Loading";
import Error from "../common/Error";

class HomePage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            users: [],
            filteredUsers:[],
            error: null
        };
    }



    componentDidMount() {
        this.fetchUsers();
    }

    filterList (event) {
        let filteredUsers = this.state.users.slice();
        filteredUsers = filteredUsers.filter(function(user){
            return user.name.toLowerCase().search(
                event.target.value.toLowerCase()) !== -1;
        });
        this.setState({filteredUsers});
    }

    fetchUsers() {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(response => response.json())
            .then(data =>
                this.setState({
                    users: data,
                    filteredUsers:data,
                    loading: false
                })
            )
            .catch(error => this.setState({ error, loading: false }));
    }

    render() {
        const { loading, filteredUsers, error } = this.state;
        return (
            <div className="HomePage">
                <div className="filter-search--container ">
                    <i className="fas fa-search"/>
                    <input type="text" className="filter-search"  placeholder="search" onChange={this.filterList.bind(this)}/>
                </div>
                <div className="users--container">
                {
                    !error?(!loading ? (
                    filteredUsers.map(user => {
                        const { id, name, email,phone } = user;
                        return (<UserCard key={user.id} name={name} email={email} phone={phone} id={id}/>)

                    })

                ):(
                    <Loading/>
                )): (<Error error={error}/>)}
                </div>
            </div>)
    }

}

export default HomePage;
