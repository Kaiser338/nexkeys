'use client';
import env from './env-config.js';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const authToken = process.env.AUTH_TOKEN;

const Search = () => {
  const router = useRouter();
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const delaySearch = setTimeout(() => {
      if (searchText.trim() !== '') {
        axios.get(`http://127.0.0.1:8000/core/game/?search=${searchText}`, {
          headers: {
            Authorization: `Token ${env.AUTH_TOKEN}`,
          },
        })
          .then(response => {
            setSearchResults(response.data);
            console.log(response.data);
          })
          .catch(error => {
            console.error(error);
          });
      } else {
        setSearchResults([]);
      }
    }, 2000);
  
    return () => {
      clearTimeout(delaySearch);
    };
  }, [searchText]);
  

  const handleSearchChange = event => {
    setSearchText(event.target.value);
  };


  const handleSearchResultClick = (gameId) => {
    router.push(`/products/${gameId}`);
  };

  return (
    <div>
      <input type="text" placeholder="Search" value={searchText} onChange={handleSearchChange} />
      <div className='search-results'>
        <ul>
          {searchResults.map(result => (
            <li className='search-list' key={result.id} onClick={() => handleSearchResultClick(result.id)}>
              {result.gameName}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Search;
