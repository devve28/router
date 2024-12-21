import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchData } from '../../api';

const AlbumDetail = () => {
  const { albumId } = useParams();
  const [album, setAlbum] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAlbumData = async () => {
      setLoading(true);
      setError(null); // Сброс ошибки перед новым запросом
      try {
        const albumData = await fetchData(`albums/${albumId}`);
        if (!albumData) throw new Error('Альбом не найден');
        setAlbum(albumData);

        const photoData = await fetchData(`albums/${albumId}/photos`);
        setPhotos(photoData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAlbumData();
  }, [albumId]);

  if (loading) {
    return <div className="text-center p-4">Загрузка...</div>;
  }

  if (error) {
    return (
      <div className="text-center p-4">
        <p>{error}</p>
        <Link to="/albums" className="text-blue-600">Перейти к списку альбомов</Link>
      </div>
    );
  }

  return (
    <div className="container p-8 text-left">
      <h2 className="text-2xl font-bold text-center">{album.title}</h2>
      <h3 className="mt-4 text-xl">Фотографии:</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {photos.length ? (
          photos.map(photo => (
            <div key={photo.id} className="flex flex-col items-center">
              <img 
                className="w-full h-auto rounded-lg shadow-md" 
                src={photo.thumbnailUrl} 
                alt={photo.title} 
              />
              <p className="text-center mt-2">{photo.title}</p>
            </div>
          ))
        ) : (
          <p>Нет фотографий для отображения.</p>
        )}
      </div>
    </div>
  );
};

export default AlbumDetail;
