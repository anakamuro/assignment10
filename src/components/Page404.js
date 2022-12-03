import React from 'react';
import "./styles.css";
import Footer from "./Footer";

const Page404 = () => {
    return (
        <div>
            <h1 className="error">404</h1>
            <h2 className="error-text">Oops! It looks like this page doesn’t exist.</h2>
            <a href="#/home" className="error-link">Go back to home page</a>
            <Footer />
        </div>
    );
}



export default Page404;