import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory }  from '../components/AddCategory';

describe( 'Pruebas con el componente <AddCategory />', () => {


    const  setCategories = () => {}

    test('debe de mostrarse correctamente ', () => {
        

        const wrappers = shallow( <AddCategory  setCategories={ setCategories } />    );

        expect( wrappers ).toMatchSnapshot();

    })
    



} );