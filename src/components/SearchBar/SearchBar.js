import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SearchBar.css'


function SearchBar(){

    const sortingOptions = {
        'Best Match': 'best_match',
        'Highest Rated': 'rating',
        'Most Reviewed': 'review_count'
    }

    const [term, setTerm] = useState('');
    const [location, setLocation] = useState('');
    const [sortBy, setSortBy] = useState('best_match')

    const toggleActive = (sortOption) =>{
        if(sortBy === sortOption){
            return 'active'
        }else{
            return ""
        }
    }

    const handleSortByChange = (sortOption) =>{
        setSortBy(sortOption)
    }

    const handleTermChange = (e) => {
        setTerm(e.target.value)
    }

    const handleLocationChange = (e) => {
        setLocation(e.target.value)
    }

    const handleSearch = (event) =>{
        event.preventDefault();
        console.log(`Searching Yelp for ${term} in ${location}, with ${sortBy} `)

    }

    const objectList = Object.keys(sortingOptions).map((option) => <li onClick={()=>{handleSortByChange(sortingOptions[option])}} className={toggleActive(sortingOptions[option])} key={sortingOptions[option]}>{option}</li>)

    return (
        <div>
            <div>
                <h1 className='banner'>ravenous</h1>
            </div>
            <div className='searchBar'>
                <ul className='searchBarOptions'>{objectList}</ul>
                <form onSubmit={handleSearch}>
                    <div className='inputOptions'>
                        <input id='input-1' placeholder='Business Name' onChange={handleTermChange} />
                        <input id='input-2' placeholder='Where' onChange={handleLocationChange} />
                    </div>
                    <div>
                        <button type='submit'> Lets Go </button>
                    </div>
                </form>            
            </div>
        </div>
    )
}

export default SearchBar