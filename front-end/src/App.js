import React, { Component } from 'react';
import './App.css';
import Users from './components/Users';
import ViewUser from './components/viewUser';
import Dashboard from './components/dashboard';
import { Route, Link } from 'react-router-dom';

class App extends Component {

  state = {
    users: '',
    totalUsers: '',
    avgUserAge: '',
    medianAge: '',
    commonFiveFirstNames: []
  }

  componentDidMount() {
      fetch('http://localhost:4000/displayusers')
      .then((res) => res.json())
      .then(resJSON => {
        let users = resJSON,
          length = users.length;
       
        let user_age = users.map((item, index) => {
          return item.age;
        });

        let user_names = users.map((item, index) => {
          return item.first_name;
        })
        let total = function total(a, b){
            a = parseInt(a);
            b = parseInt(b);
            return a+b;
        };

        let sortArray = (a, b) => {
          return a-b;
        };

        let sort_age = user_age.sort(sortArray);
        let total_age = user_age.reduce(total);
        let avgUserAge = Math.round(total_age/length);
        let medianAge = sort_age.filter((item, index) => {
          return index === Math.round((length+1)/2);
        });


        let i, j, counter, arr=[];
        for(i=0; i<length; i++){
          counter = 0;
          if(arr.includes(user_names[i])){

          }
          else{
            for(j=1; j<length; j++){
              if(user_names[i] === user_names[j]){
                counter = counter+1;
              }
            } 
            arr.push({name: user_names[i], counter: counter});
          }
        }

                let arr1 = arr.sort((a,b) => {
                  return b.counter-a.counter;
                }); 
                let commonFiveFirstNames = [];
                for(i=0; i<5; i++){
                  commonFiveFirstNames.push(arr1[i]);
                } 
       
        this.setState({
          users,
          totalUsers: length,
          avgUserAge,
          medianAge,
          commonFiveFirstNames
        })
      })

     
  }

  // viewUser = (id) => {
  //   let users = this.state.users,
  //     user1 = users.filter((item, index) => {
  //       return item.id === id;
  //     });
  //     let viewUser = [];
  //     viewUser.push({user1});
  //     console.log(viewUser);

  //   this.setState({
  //     viewUser
  //   })
  // }

  render() {
    return (
      <div className="App">

      <div>
        <Link className="links" to="/users">Users Page</Link>
        <Link className="links" to="/dashboard">Dashboard Page</Link>

      </div>
            <Route path="/users" render={() => {
              return <Users users={this.state.users}/>
            }} />
            <Route path="/view/:id" render={() => {
              return <ViewUser users={this.state.users} />
            }} />
            <Route path="/dashboard" render={() => {
              return <Dashboard users={this.state.users} commonFiveFirstNames={this.state.commonFiveFirstNames} totalUsers={this.state.totalUsers} avgUserAge={this.state.avgUserAge} medianAge={this.state.medianAge} />
            }} />
      </div>
    )
  }
}

export default App;

