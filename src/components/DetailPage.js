import React, {useState, useEffect} from 'react';
import postData from "./accomodation.json"
import './styles.css';
import {  useParams } from "react-router-dom";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faStar} from '@fortawesome/free-solid-svg-icons'
//import {faStar} from "react-icons/fa";
import ReactStars from 'react-stars';
import Footer from "./Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import Carousel from "./Carousel";




const DetailPage = () => {
    const { title } = useParams();
    const [isActive, setIsActive ] = useState(false);
    const [isShow, setIsShow ] = useState(false);
   /* const [ noIcon, setNoIcon ] = useState(false);*/

    
   
  return (
    <div className="Dbackground">
    <img className="backgroundB" src="backgroundB.png" alt="backgroundB"/>
    <div>
   {
    postData && postData.filter(card => card.title === title).map((card, index) => {
      const pictures = card.pictures;
      return(
        <div className="post-container" key={index}>
         {/* <img className="detail-pic" src={card.pictures[0]} alt="pic"/> */}
         <Carousel pictures={pictures}/>
         <div className="detail">
        
        <div className="heading">
        <div className="title-list">
        <h1 className="cTitle">{card.title}</h1>
        <h3 className="cLocation">{card.location}</h3>
        <div className="cTagsList">
          {card.tags.map((tag, index)=> <h3 className="cTags" key={index}>{tag}</h3>) }
        
        </div>
        </div>
        <div className="name-list">
          <div className="profile">
          <h3 className="hName">{card.host.name}</h3>
          <img className="hPic" src={card.host.picture} alt="host-pic"/>
          </div>
          <ReactStars className="stars" size={30} count={5} color2={'#FF6060'} color1={'#E3E3E3'} value={parseInt(card.rating)}/>
        </div>
        </div>
        <div className="accordion-list">
          <div className="description">
            <div onClick={()=>setIsActive(!isActive)} className="dTitle" style={{marginBottom: isActive ? '' : '30%'}}>Description
              <div className="iconD"> {isActive ? <FontAwesomeIcon className="icon" icon={faAngleDown} /> : <FontAwesomeIcon className="icon" icon={faAngleUp} /> }</div></div>
             {isActive && <div className="dContent">{card.description}</div>}
             </div>
             <div className="equipments">
            <div onClick={()=>setIsShow(!isShow)}  className="eTitle" style={{marginBottom: isShow ? '' : '30%'}}>Equipments
            <div className="iconE"> {isShow ? <FontAwesomeIcon className={(pictures.length === 1) ? "icon": "noIcon" }  icon={faAngleDown} /> : <FontAwesomeIcon className="icon" icon={faAngleUp} />} </div></div>
              
            {isShow && <div className="eContent" key ={card.id}>{card.Amenities.map((amenity,index)=> (<p className="dItem" key={index}>{amenity}</p>))}</div>}
             </div>
          </div>
          <Footer/>
          </div>
          </div>
      )
    })
   }
  </div>
  </div>
  )
       }

export default DetailPage;