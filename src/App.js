import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Character from './pages/Character';
import Favorite from './pages/Favorite';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/home" render={ (props) => <Home { ...props } /> } />
        <Route exact path="/personagem/:id" component={ Character } />
        <Route exact path="/favorite" component={ Favorite } />
      </Switch>
    );
  }
}

export default App;
