import React, { useState, useEffect } from 'react'
import GifGridItem from './GifGridItem';

export const GifGrid = ({ category }) => {

    const  [ images, setImages ] =  useState([]);

    useEffect( () => {
        getGisft();
    }, [ ] );

    const getGisft = async() => { 

        const url ='https://api.giphy.com/v1/gifs/search?q=pokemon&limit=10&api_key=Qmar0HBJRlLnLaX5QQMHEsae5AiucqSG';
        const resp = await fetch( url );
        const { data } = await resp.json();


        const gif = data.map( img => {

            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }

        });

        
        
        console.log( gif );
        setImages( gif );
    }

    //  function getGisft();


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
