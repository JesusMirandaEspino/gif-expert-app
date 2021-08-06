import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory }  from '../components/AddCategory';

describe( 'Pruebas con el componente <AddCategory />', () => {


    const  setCategories = jest.fn();

    let wrappers = shallow( <AddCategory  setCategories={ setCategories } />    );

    beforeEach( () => {
        jest.clearAllMocks();
        wrappers = shallow( <AddCategory  setCategories={ setCategories } />    );

    } );

    test('debe de mostrarse correctamente ', () => {
        



        expect( wrappers ).toMatchSnapshot();

    });


    
    test('debe de cambiar la caja de texto  ', () => {
        

        const input  = wrappers.find( 'input' );
        const value = 'Hola Mundo';

        input.simulate( 'change', { target: { value } } );

    });


    test( 'NO debe de postear la informacion con submint', () => {

        wrappers.find( 'form' ).simulate( 'submit', { preventDefault(){} } );

        expect( setCategories ).not.toHaveBeenCalled();

    } );

    



} );