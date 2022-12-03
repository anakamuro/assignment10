import React from 'react';
import './styles.css';
import Accomodation from "./Accomodation"
import Footer from "./Footer"


const Home = () => {
    return (
        <div className="home">
            <div className="nature" alt="nature">
                <h1 className="text">Home anywhere and everywhere</h1>
            </div>
            <Accomodation />
            <Footer />
        </div>
    )
}



export default Home;