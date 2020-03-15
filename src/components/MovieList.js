import React from 'react'
import Movie from './Movie';

function MovieList({movies}) {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col s12'>
                    {
                        movies.map((movie, i) => {
                            return (
                                <Movie key={i} image={movie.poster_path} title={movie.title}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default MovieList
