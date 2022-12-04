import React from 'react'
import MovieBanner from '../../components/MovieBanner'
import Movies from '../../components/Movies'
import Trial from '../../components/Trial'

function Movie() {
  return (
    <div>
        <MovieBanner/>
        <Movies/>
        <Trial/>
    </div>
  )
}

export default Movie