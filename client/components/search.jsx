'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const delaySearch = setTimeout(() => {
      if (searchText.trim() !== '') {
        axios.get(`http://127.0.0.1:8000/core/game/?search=${searchText}`, {
          headers: {
            Authorization: 'Token 263ce1e0c335a315c8f1efcf52b9d9b674407a04',
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
    }, 3000);
  
    return () => {
      clearTimeout(delaySearch);
    };
  }, [searchText]);
  

  const handleSearchChange = event => {
    setSearchText(event.target.value);
  };

  return (
    <div>
      <input type="text" placeholder="Search" value={searchText} onChange={handleSearchChange} />
      <ul>
        {searchResults.map(result => (
          <li key={result.id}>{result.gameName}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
