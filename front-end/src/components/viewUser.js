import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './viewUser.css';

class ViewUser extends Component {

    state = {
        user: []
    }

    goBack = () => {
        this.props.history.push('/users');
    }

    componentDidMount(){
        let id = this.props.match.params.id;
        fetch(`http://localhost:4000/user/${id}`)
        .then((res) => res.json())
        .then(resJSON => {
            let user = resJSON;
            this.setState({
                user
            })
        })
    }

    render(){
        let user = this.state.user;
        return(
            <div>
                <h1>View User Page</h1>
                <div>
                    {
                        user && user.map((item, index) => {
                            return(
                                <ul key={index}>
                                    <li>First Name:  {item.first_name}</li>
                                    <li>Last Name: {item.last_name}</li>
                                    <li>Age: {item.age}</li>
                                    <li>Email: {item.email}</li>
                                </ul>
                            )
                        })
                    }
                </div>
                <button className="viewUser" onClick={this.goBack}>Go to Users Page</button>
            </div>
        )
    }
}

export default withRouter(ViewUser);