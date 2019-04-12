import React, {Component} from 'react';
import logo from "../logo.svg";
import BasicInfo from "./BasicInfo";
import CompanyInfo from "./ComapnyInfo";
import "./UserPage.scss";
class UserPage extends Component {

    state = {
        loading: true,
        user: [],
        error: null
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
                <h1>Im a specific user page</h1>
            {/* @todo   ADD ERROR HANDLING*/}
                {!loading ? (
                    <div className="info--container">
                    <div className="profile-picture--container">
                        <img className="profile-picture" src={logo}/>
                    </div>
                        <BasicInfo name={user.name} username={user.username} phone={user.phone} email={user.email} website={user.website}/>
                        <CompanyInfo company={user.company}/>
                    </div>
        ):(
                    <h3>Loading...</h3>
                )}
            </div>)
    }
}

export default UserPage;
