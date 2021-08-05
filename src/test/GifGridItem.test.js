import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifGridItem from '../components/GifGridItem';



describe( 'Pruebas en el archivo <GifGridItem />', () => { 

        const title = 'Es un titulo';
        const url = 'https://localhostesunaurl';
        const wrapper = shallow( <GifGridItem  title={title} url={url} /> );

    test( 'Debe mostrar el componente correctamente', () => { 

        expect( wrapper ).toMatchSnapshot();

    });


    test( 'Debe tener un parrafo con el texto con el title', () => { 

            const p = wrapper.find( 'p' );
            expect( p.text().trim() ).toBe( title );

    });

    test( 'Debe tener la url de la imagen y el alt', () => { 

            const img = wrapper.find( 'img' );
            expect( img.prop('src') ).toBe( url );
            expect( img.prop('alt') ).toBe( title );

    });


} );


