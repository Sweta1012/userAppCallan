import React, { Component } from 'react';
import {  withRouter } from 'react-router-dom';
import './dashboard.css';

class Dashboard extends Component {

    goBack = () => {
        this.props.history.push('/users');
    }

    render(){
        let topfivenames = this.props.commonFiveFirstNames;
        return(
            <div>
                <h1>Total Users: {this.props.totalUsers} </h1>
                <h1>Avg User Age: {this.props.avgUserAge} </h1>
                <h1>Median User Age: {this.props.medianAge} </h1>
                <h1>Top 5 Common First Names: {
                    topfivenames.map((item, index) => {
                        return(
                            <ul className="names" key={index}>
                                <li> {item.name}</li>
                            </ul>
                        )
                    })
                } </h1>


                <button className="viewUser" onClick={this.goBack}>Go to Users Page</button>

            </div>

        )
    }
}

export default withRouter(Dashboard);