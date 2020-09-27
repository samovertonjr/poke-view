import React from 'react';

const Card = ({ name, url }) => {
  const id = url.split('/')[6];

  return (
    <section className="bg-white pa3 ma2 bw2 shadow-3">
      <h2 className="w100">{name}</h2>
      <img
        className="db"
        alt={name}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
      />

      <ul className="list pa0">
        <li>Height:</li>
        <li>Weight: </li>
      </ul>
    </section>
  );
};

export default Card;
