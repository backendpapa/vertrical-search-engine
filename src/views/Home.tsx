import React, { useEffect, useState } from 'react';

import "../components/Home/css/Search.css"
import SearchIcon from '../components/Home/SearchIcon';
import Results from '../components/Home/Results';
import "./css/Home.css"
function Home() {
  const [result,setResult]=useState([])
  const [search,setSearch]=useState("")


  const handleChange = (e: { target: { value: string; }; }) => {
    setSearch(e.target.value);
  };

  const searchDatabase=async (query:string)=>{
    if(query=="" ||query == null){
      setResult([])
    }else{
    const response=await fetch(`http://localhost:3001/${query}`)
    // console.log(await response.json())
    const data=await response.json()
  
    setResult( data)
    }
    
  }
  // useEffect(()=>{
  //   searchDatabase(search)
  // },[])

  const handleKeyPress = (event:any) => {
    if(event.key === 'Enter'){
      searchDatabase(search)
    }
  }

  return (
    <div className="flex-container" >
      <div className="fixed-search">
        
      <div className="search-container">
    <input onKeyPress={handleKeyPress}  className="input-container" type="search" onChange={handleChange} name="" id="" ></input>
     <button  onClick={()=>{searchDatabase(search)}} value={search} className="submit-button" type="submit"><SearchIcon /></button>
    </div>
      </div>
      {result.length==0?(<div>
        <p className="no-result">Search for a new information...</p>

      </div>):<Results result={result} />}
    </div>
  );
}

export default Home;
