import { useState, useEffect } from 'react';
import axios from 'axios';
import FilterCafes from './FilterCafes.jsx';

const CafesTable = () => {
  const [cafes, setCafes] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    axios.get('/cafes').then((response) => {
      setCafes(response.data.cafes);
    });
  }, []);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredCafes = filter === 'All'
    ? cafes
    : cafes.filter((cafe) => cafe.subwayCode === filter);

  return (
    <div className="cafesTable">
      <FilterCafes filter={filter} onFilterChange={handleFilterChange} />
      <ul className="cardsList">
        {filteredCafes.map((cafe) => (
          <li key={cafe.id} className="card">
            <img src={cafe.img || 'https://placehold.co/150'} alt="" />
            <h2>{cafe.name}</h2>
            <p>{cafe.desc}</p>
            <p>{cafe.address}</p>
            <p>Subway: {cafe.subwayCode}</p>
            <p>{cafe.workTime}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CafesTable;
