import React from 'react';
import Card from './Card';

const CardList = ({ pokemon }) => {
  return (
    <div className="flex flex-wrap items-start justify-center">
      {pokemon.map((_poke, i) => {
        return <Card key={i} url={pokemon[i].url} name={pokemon[i].name} />;
      })}
    </div>
  );
};

export default CardList;
