import React from 'react'
import PropTypes from 'prop-types';
export default function GifGridItem( { id, title, url } ) {



    return (
        <section className="fila" >

            <div className="contenedor1" >

                <div className="col-full-12" >

                    <div className="card  animate__animated animate__fadeIn">
                        <img  src={ url} title={  title }   alt={ title } />
                        <p>{ title }</p> 
                    </div>


                </div>

            </div>
            
        </section  >
    )
}




GifGridItem.propTypes = { 
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}
