import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Albums.css';

const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums');
        const data = await response.json();
        setAlbums(data);
      } catch (error) {
        console.error('Error fetching albums:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAlbums();
  }, []);

  if (loading) {
    return <div className="albums-container"><p>Loading albums...</p></div>;
  }

  if (albums.length === 0) {
    return <div className="albums-container"><p>No albums to display.</p></div>;
  }

  return (
    <div className="albums-container">
      <h1>Albums</h1>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>
            <Link to={`/albums/${album.id}`} className="album-link">{album.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Albums;
