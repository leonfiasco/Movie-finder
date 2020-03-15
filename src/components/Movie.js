import React from 'react'

function Movie(props) {
    return (
        <div>
           <div className="col s12 m6 l3">
               <div className="card">
                   <div className="card-image">
                       {
                        props.image === null ? <img src={'https://awmaa.com/wp-content/uploads/2017/04/default-image.jpg'} alt="default-pic" style={{width: '100%', height: 360}}/> :
                        <img src={`https://image.tmdb.org/t/p/w500${props.image}`} alt='movie-pic' style={{width: '100%', height: 360 }}/>
                       }
                   </div>
                   <div className="card-content">
                        <p><a href='-'>view details</a></p>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default Movie
