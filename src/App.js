import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Movie from "./pages/movie/Movie";
import MovieDetail from "./pages/movieDetail/MovieDetail";
import Pricing from "./pages/pricing/Pricing";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import React from "react";
import Footer from "./components/Footer";

import BlogDetail from "./pages/blogDetail/BlogDetail";
import Dashboard from "./pages/admin/Dashboard";
import MovieTable from "./pages/admin/Movie/MovieTable";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieUpdateBtn from "./pages/admin/Movie/MovieUpdateBtn";
function App() {


  return (
    <div>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/movie" element={<Movie />} />
        <Route exact path="/movie/:id" element={<MovieDetail />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/contact" element={<Contact />} />
        
        <Route path="/dashboard" element={<Dashboard />} />
        <Route exact path="/movieTable" element={<MovieTable />} />
        <Route path="/movieUpdate/:id" element={<MovieUpdateBtn />} />
      </Routes>
     
    </div>
  );
}

export default App;
