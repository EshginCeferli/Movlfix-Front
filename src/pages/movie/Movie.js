import React from "react";
import Footer from "../../components/Footer";
import MovieBanner from "../../components/MovieBanner";
import Movies from "../../components/Movies";
import Navbar from "../../components/Navbar";
import Trial from "../../components/Trial";

function Movie() {
  return (
    <>
      <Navbar />
      <MovieBanner />
      <Movies />
      <Trial />
      <Footer />
    </>
  );
}

export default Movie;
