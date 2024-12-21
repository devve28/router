import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-blue-600 text-white p-4">
    <div className="container flex justify-center space-x-4">
      <Link to="/users" className="hover:text-blue-200">Пользователи</Link>
      <Link to="/albums" className="hover:text-blue-200">Альбомы</Link>
    </div>
  </nav>
);

export default Navbar;
