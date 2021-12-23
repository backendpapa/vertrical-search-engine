import React, { useState } from 'react';
import {Link,} from 'react-router-dom'
import "./css/Results.css"

function Results(prop:{result:any}) {

  return (
    <div className="container" >
      {
        prop.result.map((item:any)=>{
          return  <div className="container-item">
       
            <Link className="link" to={`/details/${item.title}`}>
            <div className="result-container"  >
            <div className="item1" style={{background:`url(${item.photo})`}}>
                
            </div>
            <div className="item2">
              <div >
                <p className="title">{item.title}</p>
                <p className="content">{item.shortDesc}</p>
              </div>
</div>
          </div></Link>
          
      </div>
        })
      }
      
        
          
    </div>
  );
}

export default Results;
