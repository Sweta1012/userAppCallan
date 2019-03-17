import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Users.css';

class Users extends Component {

    state = {
        users: ''
    }

    componentDidMount() {
        fetch('http://localhost:4000/displayusers')
        .then((res) => res.json())
        .then(resJSON => {
          let users = resJSON;  
          this.setState({
                users
            })       
          });
    } 

    handleChange = (event) => {
            let value = event.target.value,
            users = this.props.users
           let  userNames = users.filter((item) => {
                return item.first_name.startsWith(value);
            })
            this.setState({
                users: userNames
            })
    }

    render(){
        let users = this.state.users
        return(
            <div className="App">
                <div>
                    <input type="text" className="search" placeholder="type name to search users" onChange={this.handleChange}></input>
                </div>
                <div className="flex-container">
                    {
                            users && users.map((item, index) => {
                                return(
                                    <ul className="card" key={index}>                            
                                    <li className="description">{item.first_name}</li>
                                    <Link to={'/view/'+ item.id}><button className="viewUser">View</button></Link>
                                </ul>
                                )
                            })
                    }

                </div>
            </div>
        )
    }
}

export default Users;