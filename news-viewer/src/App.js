import logo from './logo.svg';
import './App.css';
import React, { useCallback, useState } from 'react';
import axios from 'axios';
import NewsList from './components/NewsList';
import Categories from './components/Categories';

const App = () => {
  const [category, setCategory] = useState(null);
  const onSelect = useCallback(category => setCategory(category), []);
  
  return (
    <>
      <Categories category={category} onSelect={onSelect}/>
      <NewsList category={category}/>
    </>
  )
};

export default App;
