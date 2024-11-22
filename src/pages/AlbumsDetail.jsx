import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './AlbumsDetail.css';

const AlbumDetails = () => {
  const { id } = useParams(); // Get the album ID from the URL
  const [album, setAlbum] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAlbumDetails = async () => {
      try {
        const albumResponse = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`);
        const albumData = await albumResponse.json();
        setAlbum(albumData);

        const photosResponse = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
        const photosData = await photosResponse.json();
        setPhotos(photosData);
      } catch (error) {
        console.error('Error fetching album details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAlbumDetails();
  }, [id]);

  if (loading) {
    return <div className="album-details-container"><p>Loading album details...</p></div>;
  }

  if (!album) {
    return <div className="album-details-container"><p>Album not found.</p></div>;
  }

  return (
    <div className="album-details-container">
      <h1>Album: {album.title}</h1>
      <div className="photos-container">
        {photos.map((photo) => (
          <div key={photo.id} className="photo-item">
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <p>{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumDetails;
