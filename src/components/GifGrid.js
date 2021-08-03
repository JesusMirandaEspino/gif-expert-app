import React, { useState, useEffect } from 'react'
import GifGridItem from './GifGridItem';
import { getGisft } from '../helpers/getGif';

export const GifGrid = ({ category }) => {

    const  [ images, setImages ] =  useState([]);

    useEffect( () => {
        getGisft(  category )
        .then( imgs => setImages( imgs )  );
    }, [ ] );



    return (
        <section className="fila">
            <div className="contenedor1" >
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
