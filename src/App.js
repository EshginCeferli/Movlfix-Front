import logo from "./logo.svg";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import React, { Component } from "react";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";


function App() {
  return (
    <div>
    
      <Navbar />
      
      <Home />
      
      <Footer />
      
    </div>
  );
}

export default App;
