import React, { Component } from 'react'
import { getFavorites } from '../services/favoriteService';

class Favorite extends Component {
  state = {
    personagens: []
  }

  componentDidMount() {
    const personagens = getFavorites();
    this.setState({
      personagens
    });
  }

  render() {
    const { personagens } = this.state;
    return (
        <div>
          {
            personagens.map((personagem) => (
              <div className="character">
                <img className="img-detail" src={ personagem.image } alt="exemplo" />
                <h1>Name: { personagem.name }</h1>
                <h2>Status: { personagem.status } </h2>
                <h2>Origin: { personagem.origin ? personagem.origin.name : null }</h2>
                {/* <h2>Origin: { personagem.origin && personagem.origin.name }</h2> */}
                <h2>Location: { personagem.location && personagem.location.name }</h2>
              </div>
            ))
          }
        </div>
    )
  }
}

export default Favorite;