import React, { Component } from 'react'
import Card from '../components/Card';
import Loading from '../components/Loading';
import { getCharacters } from '../services/apiService';

class Home extends Component {
  state = {
    loading: true,
    characters: [],
  }

  /*
    1 - Iniciar o Load;
    2 - Logica que deve acontecer durante o Load.
    3 - Remover o Load
  */

  async componentDidMount() {
    const personagens = await getCharacters();
    this.setState({
      loading: false,
      characters: personagens,
    });
  }

  render() {
    const { loading, characters } = this.state;
    return (
      <div className="Home">
        {
          loading ? (
            <Loading />
          ) : (
            characters.map(({ name, image, id }) =>  (
              <Card key={ name } name={ name } id={ id } image={ image } />
            ))
          )
        }
      </div>
    )
  }
}

export default Home;