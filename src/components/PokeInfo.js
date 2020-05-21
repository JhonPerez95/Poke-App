import React, { useEffect, useState } from 'react';
import PokeCard from './PokeCard';
import { infoPokemon } from '../services/pokeApi';

import { Grid } from '@material-ui/core';

export default function PokeInfo({ match }) {
  const [info, setInfo] = useState('');

  const id = match.params.id;
  const name = match.params.name;
  let url =
    'https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/other-sprites/official-artwork/';

  const loadInfo = async (id) => {
    const res = await infoPokemon(id);
    setInfo(res);
  };
  useEffect(() => {
    loadInfo(id);
  }, [id]);
  return (
    <>
      <h1> Poke info </h1>
      <Grid>
        <Grid container justify="center">
          <PokeCard
            image={`${url}${id}.png?raw=true`}
            name={name}
            description={info}
          />
        </Grid>
      </Grid>
    </>
  );
}
