import React from 'react'
import SearchBar from './components/SearchBar/SearchBar'
import BusinessList from './components/BusinessList/BusinessList'
import './App.css';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <BusinessList />
    </div>
  );
}

export default App;
