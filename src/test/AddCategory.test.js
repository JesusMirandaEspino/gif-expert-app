import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory }  from '../components/AddCategory';

describe( 'Pruebas con el componente <AddCategory />', () => {


    const  setCategories = () => {};

    const wrappers = shallow( <AddCategory  setCategories={ setCategories } />    );

    test('debe de mostrarse correctamente ', () => {
        

       

        expect( wrappers ).toMatchSnapshot();

    });


    
    test('debe de cambiar la caja de texto  ', () => {
        

        const input  = wrappers.find( 'input' );
        const value = 'Hola Mundo';

        input.simulate( 'change', { target: { value } } );

    })

    



} );