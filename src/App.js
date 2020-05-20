import React from 'react';

import Home from './components/Home';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import ListPokemon from './components/ListPokemon';
import PokeInfo from './components/PokeInfo';
function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/list/" component={ListPokemon} />
      <Route path="/poke-info/:id/:name" exact component={PokeInfo} />
    </Router>
  );
}

export default App;
