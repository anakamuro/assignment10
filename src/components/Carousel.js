import React, {useState} from "react";
import './styles.css';
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";


 function Carousel({pictures}){
    const [currImg , setCurrImg] = useState(0);
 //   const [ isIcon, setIsIcon] = useState(false);

 

 const nextSlide = () => {
    setCurrImg(currImg === pictures.length - 1 ? 0 : currImg + 1)
 }

 const prevSlide = () => {
    setCurrImg(currImg === 0 ? pictures.length -1 : currImg - 1)
    
 }
 

 if(pictures === undefined) return '';
     return(
        <div className="carousel">
            <div 
            className="carouselInner"
            style={{backgroundImage: `url(${pictures[currImg]})` }}>

            <div className={pictures.length === 1 ?  "no-icon" : "left" }
            onClick={prevSlide}
            >
            <ArrowBackIosIcon  style={{ fontSize: 30}}/>
            </div>
            <div className="center"></div>
            <div className={pictures.length === 1 ?  "no-icon" : "right" } 
            onClick={nextSlide}
            >
            <ArrowForwardIosIcon style={{ fontSize: 30}} />
            </div>
            </div>
        </div>    
)
 }

 export default Carousel;