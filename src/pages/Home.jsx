import React, { Component } from 'react'
import Card from '../components/Card';

class Home extends Component {

  render() {
    return (
      <div className="Home">
        <Card name="Rick Sanchez" image="https://rickandmortyapi.com/api/character/avatar/1.jpeg" />
        <Card name="Rick Sanchez" image="https://rickandmortyapi.com/api/character/avatar/1.jpeg" />
        <Card name="Rick Sanchez" image="https://rickandmortyapi.com/api/character/avatar/1.jpeg" />
        <Card name="Rick Sanchez" image="https://rickandmortyapi.com/api/character/avatar/1.jpeg" />
        <Card name="Rick Sanchez" image="https://rickandmortyapi.com/api/character/avatar/1.jpeg" />
        <Card name="Rick Sanchez" image="https://rickandmortyapi.com/api/character/avatar/1.jpeg" />
        <Card name="Rick Sanchez" image="https://rickandmortyapi.com/api/character/avatar/1.jpeg" />
        <Card name="Rick Sanchez" image="https://rickandmortyapi.com/api/character/avatar/1.jpeg" />
      </div>
    )
  }
}

export default Home;