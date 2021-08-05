import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifGridItem from '../components/GifGridItem';



describe( 'Pruebas en el archivo <GifGridItem />', () => { 

        const title = 'Es un titulo';
        const url = 'https://localhostesunaurl';

    test( 'Debe mostrar el componente correctamente', () => { 

        const wrapper = shallow( <GifGridItem  title={title} url={url} /> );


        expect( wrapper ).toMatchSnapshot();

    });




} );


