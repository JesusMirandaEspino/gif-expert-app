import React from 'react'
import GifGridItem from './GifGridItem';

import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

const { data: images, loading }  = useFetchGifs( category );



/*



*/

    return (
        <section className="fila">
            <div className="contenedor1" >
                
                <div className="col-full-12  animate__animated animate__flash" >
                    {  loading && <p>Loading</p> }
                </div>
                <div className="col-full-12" >
                    <h2> { category } </h2>  
                </div>
                <div className="col-full-12" >
                        {
                            images.map( img => 
                                <h3> <GifGridItem 
                                key={ img.id }  
                                { ...img }/> 
                                </h3>
                            )
                        }
                </div>
            </div>
        </section>
    )
}
