import React, { Component } from 'react'

class Character extends Component {

  render() {
    return (
      <div className="character">
        <img className="img-detail" src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="exemplo" />
        <h1>Name: Name</h1>
        <h2>Status: Alive</h2>
        <h2>Origin: C117</h2>
        <h2>Location: Citadel of Ricks</h2>
      </div>
    )
  }
}

export default Character;