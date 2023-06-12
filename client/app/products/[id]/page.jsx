'use client'

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import '@styles/globals.css';
import '@styles/game_page.css';
import '@styles/loading_spinner.css';

const GamePage = ({ params }) => {
  const [game, setGame] = useState(null);

  useEffect(() => {
    if (params.id) {
      axios.get(`http://localhost:8000/core/game/${params.id}/`)
        .then(response => {
          setGame(response.data);
        })
        .catch(error => {
          console.log('Error retrieving game:', error);
        });
    }
  }, [params.id]);

  if (!game) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  const platforms = game.platforms.map(platform => platform.name).join(', ');

  const prices = [
    { platform: 'Steam', value: '$59.99' },
    // Add more platforms and their respective prices here
  ];

  return (
    <div className='game-box-flex'>
      <div className="game-page">
        <div className="game-container">
          <div className="game-image">
            {game.image && <img src={`http://localhost:8000${game.image}`} alt={game.gameName} />}
          </div>
          <div className="game-info">
            <h1 className="game-title">{game.gameName}</h1>
            <p className="game-description">{game.description}</p>
            <div className="game-details">
              <p><strong>Genre:</strong> {game.genre.name}</p>
              <p><strong>Rating:</strong> {game.rating.name}</p>
              <p><strong>Release Date:</strong> {game.release_date}</p>
              <p><strong>Platforms:</strong> {platforms}</p>
            </div>
          </div>
        </div>   
          <ul className="platform-list">
                {prices.map(price => (
                  <li key={price.platform} className="platform-item">
                    <strong>{price.platform}</strong> {price.value}
                  </li>
                ))}
          </ul>
        </div>
      
    </div>
  );
};

export default GamePage;