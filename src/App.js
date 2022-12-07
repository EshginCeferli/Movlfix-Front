import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Movie from "./pages/movie/Movie";
import Pricing from "./pages/pricing/Pricing";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import React from "react";
import Footer from "./components/Footer";
import {Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div>     
     <Navbar />    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/movie" element={<Movie />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>  
      <Footer />         
    </div>
  );
}

export default App;
