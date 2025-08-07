import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GameCard from '../components/GameCard';

const Home = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/games')
      .then(res => setGames(res.data));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Новые игры</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {games.map(game => <GameCard key={game._id} game={game} />)}
      </div>
    </div>
  );
};

export default Home;
