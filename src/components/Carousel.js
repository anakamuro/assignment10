import React, {useState} from "react";
import './styles.css';
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";


 function Carousel({pictures}){
    const [currImg , setCurrImg] = useState(0);
 //   const [ isIcon, setIsIcon] = useState(false);
     return(
        <div className="carousel">
            <div 
            className="carouselInner"
            style={{backgroundImage: `url(${pictures[currImg]})` }}>

            <div className="left"
            onClick={()=> {
                currImg > 0 && setCurrImg(currImg - 1);
            }}
            >
            <ArrowBackIosIcon tyle={{ fontSize: 30}}/>
            </div>
            <div className="center"></div>
            <div className="right"
            onClick={()=> {
                currImg < pictures.length - 1 && setCurrImg(currImg + 1);
            }}
            >
            <ArrowForwardIosIcon style={{ fontSize: 30}} />
            </div>
            </div>
        </div>    
)
 }

 export default Carousel;