import React from 'react';
import Card from './Card';

const CardList = ({ pokemon }) => {
  return (
    <div>
      {pokemon.map((poke, i) => {
        return <Card key={i} url={pokemon[i].url} name={pokemon[i].name} />;
      })}
    </div>
  );
};

export default CardList;
