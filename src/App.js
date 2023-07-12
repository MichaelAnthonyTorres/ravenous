import React, { useState }from 'react'
import search from './utils/yelp';
import SearchBar from './components/SearchBar/SearchBar'
import BusinessList from './components/BusinessList/BusinessList'
import './App.css';



function App() {
  const [businesses, setBusinesses] = useState([])

  const searchYelp = async (term, location, sortBy) => {
   const businesses = await search(term, location, sortBy);
   setBusinesses(businesses)
  };
  return (
    <div className="App">
      <SearchBar searchYelp={searchYelp}/>
      <BusinessList businesses = {businesses}/>
    </div>
  );
}

export default App;
