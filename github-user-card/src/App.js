import React from 'react';
import axios from 'axios';
import MyCard from './components/MyCard';
import FollowersList from './components/FollowersList';
import styled from 'styled-components';
import './App.css';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      user: [],
      userFollowers: []
    }
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users/angela-laien')
      .then(res => {
        console.log(res);
        this.setState({
          user:res.data
        });
      })

    axios
    .get('https://api.github.com/users/angela-laien/followers')
    .then(res => {
      console.log(res);
      this.setState({
        userFollowers: res.data
      });
    })
    .catch(err => console.log(err.message));
  }

  render() {
    console.log(this.state.userFollowers);

    const H1 = styled.h1`
      text-align: center;
    `
    const H2 = styled.h2`
      text-align: center;
    `

    return (
      <div className='App'>
        <H1>Github User Cards</H1>
        <MyCard me={this.state.user}/>

        <H2>Followers</H2>
        <FollowersList followers={this.state.userFollowers} />
      </div>
    );
  };
}

export default App;
