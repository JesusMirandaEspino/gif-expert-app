import React from 'react'

export default function GifGridItem( { id, title, url } ) {



    return (
        <section className="fila" >

            <div className="contenedor1" >

                <div className="col-full-12" >

                    <div className="card">
                        <img  src={ url} title={  title } />
                        <p>{ title }</p> 
                    </div>


                </div>

            </div>
            
        </section  >
    )
}
