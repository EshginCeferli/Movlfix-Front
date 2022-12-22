import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Episode from '../../components/Episode'
import MovieDetailComp from '../../components/MovieDetailComp'
import Trial from '../../components/Trial'

function MovieDetail() {

  const { id } = useParams();

  const getMovie = `https://localhost:7079/api/Movie/Get?id=${id}`

  const [movie, setMovie] = useState([]);

  async function getMovieById() {
    await axios.get(getMovie).then((response) => {
      setMovie(response.data)      
    });
  }

  useEffect(() => {
    getMovieById();
  }, [])


  return (
    <div>
      <MovieDetailComp movie={movie}/>
      <Episode/>
      <Trial/>
    </div>
  )
}

export default MovieDetail