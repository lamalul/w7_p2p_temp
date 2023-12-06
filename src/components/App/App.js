// components/App/App.js
import React from 'react';
import FilterComponent from '../Filter/FilterComponent';
import data from '../../data/data.json';
import './App.css';
const App = () => {
  console.log(data); // Check if data is imported correctly

  return (
    <div>
      <h1>Product List</h1>
      <FilterComponent data={data} />
    </div>
  );
};

export default App;
