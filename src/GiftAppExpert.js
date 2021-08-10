import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GiftAppExpert  = ( { defaultCategories = [] } ) => {

   // arreglo de categorias

    // no se declara asi const categorias = [ 'One Punch', 'Samurai X', 'Dragon Ball' ];
    const [ categories, setCategories ] = useState(  defaultCategories );

    /* Funcion de base
    const handleAdd = () => {
        setCategories( cat => [ ...cat,  'Demon Slayer'] );
    }
*/
    return (
        <section className="fila">
            <div className="contenedor1">

                <div className="col-full-12">
                    <h1> GiftAppExpert </h1>
                    <hr></hr>
                </div>

                <AddCategory setCategories={   setCategories  }/>

                <div className="col-full-12">
                    <ol>
                        {
                            categories.map( category => {
                                return <GifGrid 
                                        key={ category }
                                        category={ category }/>
                            } )
                        }
                    </ol>
                </div>

                <div className="col-full-12">
                </div>

            </div>
        </section>
    );
    
}

export default GiftAppExpert;