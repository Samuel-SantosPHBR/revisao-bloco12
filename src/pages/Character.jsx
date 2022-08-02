import React, { Component } from 'react'
import { getCharacter } from '../services/apiService';
import { addFavorites, removeFavorite } from '../services/favoriteService';

class Character extends Component {
  state = {
    personagem: {}
  }

  async handleClick() {
    const { name } = this.state;
    const resposta = await getCharacter(name);
    this.setState({
      personagem: resposta
    });
  }

  async componentDidMount() {
    // encurtada
    // const { match: { params: { id } } } = this.props;
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const resposta = await getCharacter(id);
    this.setState({
      personagem: resposta
    });
  }

  favorite = ({ target }, personagem) => {
    if (target.checked){
      addFavorites(personagem);
    } else {
      removeFavorite(personagem)
    }
  }

  render() {
    const { personagem } = this.state;
    return (
      <div className="character">
        <img className="img-detail" src={ personagem.image } alt="exemplo" />
        <h1>Name: { personagem.name }</h1>
        <h2>Status: { personagem.status } </h2>
        <h2>Origin: { personagem.origin ? personagem.origin.name : null }</h2>
        {/* <h2>Origin: { personagem.origin && personagem.origin.name }</h2> */}
        <h2>Location: { personagem.location && personagem.location.name }</h2>
        <input type="checkbox" onChange={ (event) => this.favorite(event,personagem) } />
      </div>
    )
  }
}

export default Character;