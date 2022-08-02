import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Card extends Component {
  render() {
    const { image, name, id } = this.props;
    return (
      <div className="card">
        <Link to={ `/personagem/${id}` } >
          <img src={ image } alt={ name } />
          <h1>{ name }</h1>
        </Link>
      </div>
    )
  }
}

export default Card;