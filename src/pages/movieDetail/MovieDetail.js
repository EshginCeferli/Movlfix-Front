import React from 'react'
import Episode from '../../components/Episode'
import MovieDetailComp from '../../components/MovieDetailComp'
import Trial from '../../components/Trial'

function MovieDetail() {
  return (
    <div>
      <MovieDetailComp/>
      <Episode/>
      <Trial/>
    </div>
  )
}

export default MovieDetail