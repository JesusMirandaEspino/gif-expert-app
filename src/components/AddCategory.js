import React, { useState } from 'react';



export const AddCategory = (  ) => {

    // Valor inicial del input
    const [ InputValue, SetInputValue ] = useState( 'Hola a todos' );


    // funcion que cambia el valor del input
    const handleInputChange = ( e ) => {
        SetInputValue( e.target.value );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }


    return (


                <form className="col-full-12" onSubmit={ handleSubmit } >
                    <label for="category" >Agregar categoria  </label>
                    <input type="text" name="category" id="category" value={ InputValue } onChange={  handleInputChange } />
                </form>


 

    );

}


