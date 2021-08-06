import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import {getGisft} from '../helpers/getGif';



describe( 'Pruebas con el getGif fecth', () => { 


    test( 'Debe traer al menos 10 elementos', async () => { 

        const gift = await getGisft( 'one ponche' );

        expect( gift.length ).toBe( 10 );


    });


    test( 'Debe ser enviada la categoria', async () => { 

        const gift = await getGisft( '' );

       //  expect de cantidad e elemetos  expect( gift.length ).toBe( 10 );


    });

} );


