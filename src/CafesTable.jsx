import { useState, useEffect } from 'react';
import axios from 'axios';
import FilterCafes from './FilterCafes.jsx';

const CafesTable = () => {
  const [cafes, setCafes] = useState([]);

  useEffect(() => {
    axios.get('/cafes').then((response) => {
      setCafes(response.data.cafes);
    });
  }, []);

  return (
    <div className="cafesTable">
      <FilterCafes />
      <ul className="cardsList">
        {cafes.map((cafe) => (
          <li key={cafe.id} className="card">
            <img src={cafe.img || 'https://via.placeholder.com/150'} alt="" />
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
