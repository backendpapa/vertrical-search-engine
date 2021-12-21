import React from 'react';
import "./css/Search.css"
import SearchIcon from './SearchIcon';
function Search() {
  return (
    <div >
    <div className="search-container">
    <input  className="input-container" type="search" name="" id="" ></input>
     <button  onClick={()=>{alert("Hello")}} className="submit-button" type="submit"><SearchIcon /></button>
    </div>
    </div>
  );
}

export default Search;
