import React, { useState } from 'react';
import './FilterComponent.css';

const FilterComponent = ({ data }) => {
  const [filterCriteria, setFilterCriteria] = useState('');
  const [sortedData, setSortedData] = useState([]);

  const handleFilterChange = (e) => {
    setFilterCriteria(e.target.value);
  };

  const handleSort = () => {
    const sorted = [...filteredData].sort((a, b) => a.year - b.year);
    setSortedData(sorted);
  };

  const filteredData = data.filter(item =>
    item.productName.toLowerCase().includes(filterCriteria.toLowerCase())
  );

  return (
    <div className="filter-container">
      <input
        type="text"
        placeholder="Filter by Product Name"
        value={filterCriteria}
        onChange={handleFilterChange}
      />
      <button onClick={handleSort}>Sort by Year</button>
      <ul>
        {sortedData.length ? sortedData.map(item => (
          <li key={item.id}>{item.productName} - {item.year} - {item.model}</li>
        )) : filteredData.map(item => (
          <li key={item.id}>{item.productName} - {item.year} - {item.model}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilterComponent;
