import React, {Component} from 'react';

class UserPage extends Component {

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
            <div className="UserPage">
                <h1>Im a specific user page</h1>
            {/* @todo   ADD ERROR HANDLING*/}
                {!loading ? (
                    users.map(user => {
                        const { username, name, email } = user;
                        return (
                            <div key={username}>
                                <p>Name: {name}</p>
                                <p>Email Address: {email}</p>
                                <hr />
                            </div>
                        )
                    })

        ):(
                    <h3>Loading...</h3>
                )}
            </div>)
    }
}

export default UserPage;
