import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SearchBar.css'


function SearchBar(){

    const sortingOptions = {
        'Best Match': 'best_match',
        'Highest Rated': 'rating',
        'Most Reviewed': 'review_count'
    }

    const objectList = Object.keys(sortingOptions).map((option, index) => <li key={'option_' + index}>{option}</li>)

    return (
        <div>
            <div>
                <h1 className='banner'>ravenous</h1>
            </div>
            <div className='searchBar'>
                <ul className='searchBarOptions'>{objectList}</ul>
                <form>
                    <div className='inputOptions'>
                        <input id='input-1' placeholder='Business Name'></input>
                        <input placeholder='Where'></input>
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