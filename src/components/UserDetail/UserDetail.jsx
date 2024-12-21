import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchData } from '../../api';

const UserDetail = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      setError(null); 

      try {
        const userData = await fetchData(`users/${userId}`);
        if (!userData) {
          throw new Error('Пользователь не найден');
        }
        setUser(userData);

        const userAlbums = await fetchData(`users/${userId}/albums`);
        setAlbums(userAlbums);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId]);


  if (loading) {
    return <div className="text-center p-4">Загрузка...</div>;
  }

  if (error) {
    return (
      <div className="text-center p-4">
        <p className="text-red-500">{error}</p>
        <Link to="/users" className="text-blue-600 hover:underline">Вернуться на главную</Link>
      </div>
    );
  }

  
  
return (
  <div className="container p-8 text-left">
    <h2 className="text-3xl font-bold text-center">{user.name}</h2>
    <p className="text-lg text-gray-600">{user.email}</p>
    <h3 className="text-xl mt-4">Альбомы пользователя:</h3>
    {albums.length > 0 ? (
      <ul className="space-y-2 mt-2">
        {albums.map((album) => (
          <li key={album.id}>
            <Link to={`/albums/${album.id}`} className="hover:text-blue-600">{album.title}</Link>
          </li>
        ))}
      </ul>
    ) : (
      <p>У пользователя нет альбомов.</p>
    )}
  </div>
);

};

export default UserDetail;
