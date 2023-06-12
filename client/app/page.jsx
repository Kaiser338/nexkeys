'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Product from '@components/product';
import '@styles/globals.css';
import '@styles/home_page.css';

const Home = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/core/game/top-rated/', {
      params: {
        num_games: 6
      }
    })
      .then(response => {
        setGames(response.data);
      });
  }, []);

  return (
    <section className='main-page-section'>
      <div className='title-bar'>
        <span className='title-bar-text'>
          Bestsellers
        </span>
      </div>
      <div className='product-section'>
        {games.map((game, index) => <Product key={index} game={game} />)}
      </div>
    </section>
  )
}

export default Home
