import React, { Component } from 'react';
import UserCard from "./UserCard";

class HomePage extends Component {
    state = {
        loading: true,
        users: [],
        error: null
    };

    componentDidMount() {
        this.fetchUsers();
    }

    fetchUsers() {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(response => response.json())
            .then(data =>
                this.setState({
                    users: data,
                    loading: false,
                })
            )
            .catch(error => this.setState({ error, loading: false }));
    }

    render() {
        const { loading, users, error } = this.state;
        return (
            <div className="HomePage">
                {/* @todo   ADD ERROR HANDLING*/}
                {!loading ? (
                    users.map(user => {
                        const { id, name, email,phone } = user;
                        return (<UserCard key={user.id} name={name} email={email} phone={phone} id={id}/>)

                    })

                ):(
                    //@todo add spinner
                    <h3>Loading...</h3>
                )}
            </div>)
    }

}

export default HomePage;
