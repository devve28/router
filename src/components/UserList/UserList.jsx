
import React, { useEffect, useState } from 'react';
import { fetchData } from '../../api';
import { Link } from 'react-router-dom';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userData = await fetchData('https://jsonplaceholder.typicode.com/users');
        setUsers(userData);
        setLoading(false);
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <p className="text-center p-4">Загрузка...</p>;
  }

  return (
    <div className="container p-4 text-left">
      <h2 className="text-2xl font-bold mb-4 text-center">Список пользователей</h2>
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`} className="hover:text-blue-600">{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
