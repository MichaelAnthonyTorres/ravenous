import React from 'react'
import SearchBar from './components/SearchBar/SearchBar'
import BusinessList from './components/BusinessList/BusinessList'
import './App.css';



function App() {
  const business =
    {
      imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
      name: 'MarginOtto Pizzeria',
      address: '1010 Paddington Way',
      city: 'Flavortown',
      state: 'NY',
      zipCode: '10101',
      category: 'Italian',
      rating: 4.5,
      reviewCount: 90
  }

  const businesses = [business, business, business, business, business, business, business]

  return (
    <div className="App">
      <SearchBar />
      <BusinessList businesses = {businesses}/>
    </div>
  );
}

export default App;
