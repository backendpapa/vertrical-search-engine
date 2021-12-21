import React from 'react';

import Search from '../components/Home/Search';
import Results from '../components/Home/Results';
import "./css/Home.css"
function Home() {
  return (
    <div className="flex-container" >
      <Search />
      <Results />
    </div>
  );
}

export default Home;
