import React, { useState } from 'react';


const GiftAppExpert  = (   ) => {

   // arreglo de categorias

    // no se declara asi const categorias = [ 'One Punch', 'Samurai X', 'Dragon Ball' ];
    const [ categories, setCategories ] = useState( [ 'One Punch', 'Samurai X', 'Dragon Ball' ] ); 

    const handleAdd = () => {
        setCategories( cat => [ ...cat,  'Demon Slayer'] );
    }

    return (
        <section className="fila">  
            <div className="contenedor1">

                <div className="col-full-12">
                    <h1> GiftAppExpert </h1>
                    <hr></hr>
                </div>

                <div className="col-full-12">
                    <ol>
                        {
                            categories.map( category => {
                                return <li  key={category} > { category } </li>
                            } )
                        }
                    </ol>
                </div>

                <div className="col-full-12">
                        <button onClick={ handleAdd } >Agregar</button>
                </div>

            </div>
        </section>
    );
    
}

export default GiftAppExpert;