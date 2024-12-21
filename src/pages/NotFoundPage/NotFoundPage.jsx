
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className="text-center p-4">
    <h2 className="text-2xl">Страница не найдена</h2>
    <Link to="/" className="text-blue-600">Вернуться на главную</Link>
  </div>
);

export default NotFoundPage;
