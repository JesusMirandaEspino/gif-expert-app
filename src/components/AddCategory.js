import React, { useState } from 'react';
import PropTypes  from 'prop-types';

export const AddCategory = ( {  setCategories } ) => {

    // Valor inicial del input
    const [ InputValue, SetInputValue ] = useState( '' );

    // funcion que cambia el valor del input
    const handleInputChange = ( e ) => {
        SetInputValue( e.target.value );

        console.log(  'handleInputChange llamado' );
    }

    // funcion para prevenir el evento normal dal hacer submit del formulario
    const handleSubmit = (e) => {
        e.preventDefault();

        if( InputValue.trim().length > 2 ){
            setCategories( cat => [   InputValue, ...cat  ] );
            SetInputValue('');
        }

        
    }


    return (


                <form className="col-full-12" onSubmit={ handleSubmit } >
                    <label for="category" >Agregar categoria  </label>
                    <input type="text" name="category" id="category" value={ InputValue } onChange={  handleInputChange } />
                </form>


 

    );

}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
