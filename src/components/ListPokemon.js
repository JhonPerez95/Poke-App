import React, { useState, useEffect } from 'react';
import { getPokemon } from '../services/pokeApi';

import PokeCard from './PokeCard';
import { Grid } from '@material-ui/core';

export default function ListPokemon(props) {
  const [pokemonList, setPokemonList] = useState([]);

  const loadPokemon = async () => {
    const res = await getPokemon();
    setPokemonList(res);
  };

  useEffect(() => {
    loadPokemon();
  }, []);

  return (
    <>
      <Grid container justify="center">
        {pokemonList.map((pokemon, id) => {
          let url =
            'https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/';
          let pokeIndex = pokemon.url.split('/')[
            pokemon.url.split('/').length - 2
          ];
          return (
            <PokeCard
              name={pokemon.name}
              image={`${url}${pokeIndex}.png?raw=true`}
              to={`/poke-info/${pokeIndex}`}
            />
          );
        })}
      </Grid>
    </>
  );
}
