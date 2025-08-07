import React from 'react';
import { Link } from 'react-router-dom';

const GameCard = ({ game }) => (
  <div className="border p-4 rounded shadow">
    <h3 className="text-lg font-bold">{game.title}</h3>
    <p>{game.description}</p>
    <Link to={`/game/${game._id}`} className="text-purple-700 underline">Подробнее</Link>
  </div>
);

export default GameCard;
