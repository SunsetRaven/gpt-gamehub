import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-purple-700 text-white p-4 flex justify-between">
    <Link to="/" className="font-bold text-xl">GPT GameHub</Link>
    <Link to="/upload" className="bg-white text-purple-700 px-4 py-2 rounded">Загрузить игру</Link>
  </nav>
);

export default Navbar;
