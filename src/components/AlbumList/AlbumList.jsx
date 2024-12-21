import React, { useEffect, useState } from 'react';
import { fetchData } from '../../api';
import { Link } from 'react-router-dom';

const AlbumList = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const albumData = await fetchData('albums');
        setAlbums(albumData);
      } catch (err) {
        setError('Ошибка при загрузке альбомов');
      } finally {
        setLoading(false);
      }
    };

    fetchAlbums();
  }, []);

  if (loading) {
    return <div className="text-center p-4">Загрузка...</div>;
  }

  if (error) {
    return <div className="text-center p-4 text-red-600">{error}</div>;
  }

  return (
    <div className="container p-4 text-left">
      <h2 className="text-2xl font-bold mb-4 text-center">Список альбомов</h2>
      <ul className="space-y-2">
        {albums.map((album) => (
          <li key={album.id}>
            <Link to={`/albums/${album.id}`} className="hover:text-blue-600">{album.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlbumList;
