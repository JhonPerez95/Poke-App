import React from 'react';

export default function PokeInfo({ match }) {
  return (
    <>
      <h1> Poke info </h1>
      <p>{match.params.pokeIndex}</p>
    </>
  );
}
