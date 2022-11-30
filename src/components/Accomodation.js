import React from 'react';
import postData from "./accomodation.json"
import './styles.css';
import {Link} from "react-router-dom";


function Accomodation (){
  return (
    <div className="background">
    <div className="gallery">
   {
    postData && postData.map(postDetail => {
      return(
        <div className="post-container" key={postDetail.id}>
         <h3 className="pic-title">{postDetail.title}</h3>
         <div >
        <Link to={`/cards/${postDetail.title}`}><img className="data-pic" src={postDetail.pictures[0]} alt="pic"/>
        </Link>
        </div>
          </div>
      )
    })
   }
  </div>
  </div>
  )
       }

export default Accomodation