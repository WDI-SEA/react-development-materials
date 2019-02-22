import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LogIn extends Component {
    state = {
        users: [],
        user: null,
        redirectToHome: null
    }

    componentDidMount() {
        this.getAllUsers();
    }

    getAllUsers = () => {
        fetch('/api/users', { method: 'get' })
        .then((res) => {
            return res.json();
        }).then((json) => {
            this.setState({users: json.data});
        }).catch((err) => {
            console.log('error getting users', err);
        })
    }

    createUser = () => {
        fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify(this.state.user),
            headers: { "Content-Type": "application/json; charset=utf-8" }
        }).then((res) => {
            return res.json();
        }).then((json) => {
            this.setState({redirectToHome: true, users: json.data, user: null});
        }).catch((err) => {
            console.log('error creating user', err);
        })

    }

    handleChange = (e) => {
        const user = {...this.state.user};
        user[e.target.name] = e.target.value;
        this.setState({user});
    }

    handleSignUp = (e) => {
        e.preventDefault();
        this.createUser();
    }

    render() {
        return (
        <div>
            <div>
                <h1>Log-In</h1>
                <button>
                    <Link to='/' style={{textDecoration: 'none', fontSize: '20px'}}>Home Page</Link>
                </button>
                <h3>Please Select an Existing User</h3>
                {this.state.users.map(user => (
                    <div key={user._id}>
                        <Link to={`/user/${user._id}`}>
                            {user.userName}
                        </Link>
                    </div>
                ))}
            </div>
            <div>
                <h1>Sign-Up</h1>
                <form onSubmit={this.handleSignUp}>
                    <div>
                        <label htmlFor="userName" style={{display: 'inline-block', width: '100px'}}>User Name</label>
                        <input onChange={this.handleChange} name="userName" type="text" value={this.state.userName}/>
                    </div>
                    <div>
                        <label htmlFor="password" style={{display: 'inline-block', width: '100px'}}>Password</label>
                        <input onChange={this.handleChange} name="password" type="text" value={this.state.password}/>
                    </div>
                    <button>Sign Up</button>
                </form>
            </div>
        </div>
        )
    }
}

export default LogIn