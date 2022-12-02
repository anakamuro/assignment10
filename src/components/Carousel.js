import React, {useState} from "react";
import './styles.css';
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";


 function Carousel({pictures}){
    const [currImg , setCurrImg] = useState(1);
 //   const [ isIcon, setIsIcon] = useState(false);

 

 const nextSlide = () => {
    if (currImg !== pictures.length + 1){
        setCurrImg(currImg + 1)
    }
    else if (currImg === pictures.length + 1){
        setCurrImg(0) 
    }
 }

 const prevSlide = () => {
    if(currImg !== -1){
        setCurrImg(currImg - 1)
    }
    else if ( currImg === -1){
        setCurrImg(pictures.length) 
    }
 }

 if(pictures === undefined) return '';
     return(
        <div className="carousel">
            <div 
            className="carouselInner"
            style={{backgroundImage: `url(${pictures[currImg]})` }}>

            <div className="left"
            onClick={prevSlide}
            >
            <ArrowBackIosIcon tyle={{ fontSize: 30}}/>
            </div>
            <div className="center"></div>
            <div className="right"
            onClick={nextSlide}
            >
            <ArrowForwardIosIcon style={{ fontSize: 30}} />
            </div>
            </div>
        </div>    
)
 }

 export default Carousel;