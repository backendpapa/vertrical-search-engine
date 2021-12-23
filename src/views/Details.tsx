import React, { useEffect, useState } from 'react';
import { useParams,Link } from 'react-router-dom';
import ArrowLeft from '../components/Details/ArrowLeft';
import "./css/Details.css"

function Details() {
  const [detail,setDetails]=useState([])
  let {title}=useParams()
  const getDetail=async()=>{
    const response=await fetch(`http://localhost:3001/${title}`)
    const data= await response.json()
    console.log(data)
    setDetails(data)
  
  }

   useEffect( ()=>{
    getDetail()

  },[])
  return (
    <div >
      {
       detail.map((item:any)=>{
       return <div>
          <div className="image-container" style={{background:`url(${item.photo})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
          <Link to={'/'}><button className="submit-button-2" type="submit"><ArrowLeft/></button></Link>
       </div> 
       <div className="content-container">
       (<p className="title-detail">{item.title}</p>)
       <p className="content-detail">{item.description}</p>
       </div>
       </div>
       })
     }
    
     
    </div>
  );
}

export default Details;
