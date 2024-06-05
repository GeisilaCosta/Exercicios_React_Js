import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import CarList from './components/CarList';
import './App.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const cars = ['Toyota', 'Honda', 'Ford', 'Chevrolet', 'BMW', 'Mercedes', 'Audi', 'Volkswagen', 'Hyundai', 'Kia'];

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCars = cars.filter((car) =>
    car.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Lista de Montadoras de Carros</h1>
      <SearchBar value={searchTerm} onChange={handleSearchChange} />
      <CarList cars={filteredCars} />
    </div>
  );
};

export default App;

