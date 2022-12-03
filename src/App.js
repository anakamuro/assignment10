import React from "react";
import Navbar from "./components/Navbar"
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Page404 from "./components/Page404";
import DetailPage from "./components/DetailPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <BrowserRouter> */}
      <Routes>
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/cards/:title' element={<DetailPage />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/*' element={<Page404 />} />
      </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
