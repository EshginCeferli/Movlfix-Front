import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Movie from "./pages/movie/Movie";
import MovieDetail from "./pages/movieDetail/MovieDetail"
import Pricing from "./pages/pricing/Pricing";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import React from "react";
import Footer from "./components/Footer";
import {Route,Routes } from 'react-router-dom';
import Crud from "./components/Crud";
import BlogDetail from "./pages/blogDetail/BlogDetail";

function App() {
  return (
    <div>   
      {/* <Crud/> */}
      
      <Navbar/>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/movie" element={<Movie />} />
        <Route exact path="/movieDetail" element={<MovieDetail/>} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>  
   
      <Footer />         
    </div>
  );
}

export default App;
