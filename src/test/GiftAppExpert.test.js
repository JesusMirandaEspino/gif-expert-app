import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import  GiftAppExpert  from '../GiftAppExpert';


describe( 'Pruebas  con componente <GiftAppExpert />', () => {


    test('Debe de mostrar el componente correctamente ', () => {

        const wrapper = shallow( <GiftAppExpert />  );

        expect( wrapper ).toMatchSnapshot();

    });


    test('Debe de mostrar una lista de categorias', () => {
        const categorias = [ 'one punch', 'dragon ball' ];
        const wrapper = shallow( <GiftAppExpert   defaultCategories={categorias}  />);

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find( 'GifGrid' ).length ).toBe(categorias.length);

    });


});