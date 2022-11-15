import React from 'react';
import './styles.css';
import Footer from "./Footer"
 
const Home = () => {
return (
    <div className="home">
    <img className="nature" src="IMGnature.jpg" alt="nature" />
    <h1 className="text">Home&nbsp;anywhere&nbsp;and&nbsp;everywhere</h1>
    <div className="background">
    <div className="imglist">
    <img className="rec" src="Rectangle 2rec.png" alt="rec" />
    <img className="rec" src="Rectangle 2rec.png" alt="rec" />
    <img className="rec" src="Rectangle 2rec.png" alt="rec" />
    </div>
    <div className="imglist">
    <img className="rec" src="Rectangle 2rec.png" alt="rec" />
    <img className="rec" src="Rectangle 2rec.png" alt="rec" />
    <img className="rec" src="Rectangle 2rec.png" alt="rec" />
    </div>
    </div>
    <Footer/>
    </div>
    );
}
 

 
export default Home;