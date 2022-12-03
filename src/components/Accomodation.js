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
        <div key={postDetail.id}>
        <Link className="post-detail" to={`/cards/${postDetail.title}`}><div className="data-pic" s style={{backgroundImage: `url(${postDetail.pictures[0]})` }} alt="pic">
        <h3 className="pic-title">{postDetail.title}</h3>
        </div>
        </Link>
        </div>
      )
    })
   }
  </div>
  </div>
  )
       }

export default Accomodation