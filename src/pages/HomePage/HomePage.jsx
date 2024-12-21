
import React from 'react';
import UserList from '../../components/UserList/UserList';

const HomePage = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
    <h1 className="text-3xl font-bold text-center mb-6">Добро пожаловать!</h1>
    <UserList />
  </div>
);

export default HomePage;
