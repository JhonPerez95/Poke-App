import React, { useState, useEffect } from 'react';
import { getPokemon } from '../services/pokeApi';

import PokeCard from './PokeCard';
import { Grid } from '@material-ui/core';

export default function ListPokemon() {
  const [pokemonList, setPokemonList] = useState([]);
  const [pagination, setPagination] = useState({ next: '', previous: '' });

  const urlApi = process.env.REACT_APP_API;
  const url = `${urlApi}/pokemon/`;

  const loadPokemon = async (url) => {
    const { next, previous, results } = await getPokemon(url);
    setPokemonList(results);
    setPagination((pagination) => ({
      ...pagination,
      next: next,
      previous: previous,
    }));
  };

  const loadNext = async () => {
    loadPokemon(pagination.next);
  };

  const loadNeloadPrevious = async () => {
    if (pagination.previous) {
      loadPokemon(pagination.previous);
    } else {
      loadPokemon(url);
    }
  };

  useEffect(() => {
    loadPokemon(url);
  }, [url]);

  return (
    <>
      <div>
        <button
          onClick={() => {
            loadNeloadPrevious();
          }}
        >
          Last
        </button>
        <button
          onClick={() => {
            loadNext();
          }}
        >
          Next
        </button>
      </div>
      <Grid container justify="center">
        {pokemonList.map((pokemon) => {
          let url =
            'https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/other-sprites/official-artwork/';
          let id = pokemon.url.split('/')[pokemon.url.split('/').length - 2];

          return (
            <PokeCard
              name={pokemon.name}
              image={`${url}${id}.png?raw=true`}
              to={`/poke-info/${id}/${pokemon.name}`}
              key={id}
            />
          );
        })}
      </Grid>
    </>
  );
}
