import React from 'react';

const Card = ({ name, url }) => {
  const id = url.split('/')[6];

  return (
    <div className="tc grow bg-white  pa3 ma2 dib bw2 shadow-3">
      <img
        style={{ width: '175px', height: '200px' }}
        alt={name}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
      />
      <div>
        <h2>{name}</h2>
      </div>
    </div>
  );
};

export default Card;
