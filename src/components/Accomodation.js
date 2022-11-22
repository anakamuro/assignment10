import React from 'react';
import postData from "./accomodation.json"
import './styles.css';


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
        <img className="data-pic" src={postDetail.pictures[0]} alt="pic"/>
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