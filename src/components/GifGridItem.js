import React from 'react'

export default function GifGridItem( { id, title, url } ) {



    return (
        <section className="fila" >

            <div className="contenedor1" >

                <div className="col-full-12" >

                    <img  src={ url} title={  title } />
                    <p>{ title }</p> 

                </div>

            </div>
            
        </section  >
    )
}
