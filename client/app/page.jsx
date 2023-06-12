'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Product from '@components/product';
import '@styles/globals.css';
import '@styles/home_page.css';
import '@styles/loading_spinner.css';

const Home = () => {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:8000/core/game/top-rated/', {
      params: {
        num_games: 6
      }
    })
      .then(response => {
        setGames(response.data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  
  return (
    <section className='main-page-section'>
      <div className='title-bar'>
        <span className='title-bar-text'>Bestsellers</span>
      </div>
      <div className='product-section'>
        {games.map((game, index) => <Product key={index} game={game} />)}
      </div>
      <div className='products-spacing'></div>
      <div className='title-bar'>
        <span className='title-bar-text'>Best games of 2023</span>
      </div>
      <div className='product-section'>
        {games.map((game, index) => <Product key={index} game={game} />)}
      </div>
      <div className='products-spacing'></div>
    </section>
  )
}

export default Home
