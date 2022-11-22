import React from 'react';
import './styles.css';
import Accomodation from "./Accomodation"
import Footer from "./Footer"

 
const Home = () => {
return (
    <div className="home">
    <img className="nature" src="IMGnature.jpg" alt="nature" />
    <h1 className="text">Home&nbsp;anywhere&nbsp;and&nbsp;everywhere</h1>
   <Accomodation/>
   <Footer/>
    </div>
    )
}
 

 
export default Home;