import React from 'react';

import Search from '../components/Home/Search';
import Results from '../components/Home/Results';
import "./css/Home.css"
function Home() {
  return (
    <div className="flex-container" >
      <div className="fixed-search">
      <Search />
      </div>
      <Results />
    </div>
  );
}

export default Home;
