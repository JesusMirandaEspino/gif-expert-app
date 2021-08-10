import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import {GifGrid} from '../components/GifGrid';


describe( 'Pruebas con <GifGrid />', ()=>{

    const category = 'one punch';


    test('debe de mostrarse correctamente ', () => {




        const wrappers = shallow( <GifGrid category={category}/>  );
        expect( wrappers ).toMatchSnapshot();
        

    });




})


