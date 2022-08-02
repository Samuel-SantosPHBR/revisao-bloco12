import React, { Component } from 'react'

class Card extends Component {
  render() {
    const { image, name } = this.props;
    return (
      <div className="card">
          <img src={ image } alt={ name } />
          <h1>{ name }</h1>
      </div>
    )
  }
}

export default Card;