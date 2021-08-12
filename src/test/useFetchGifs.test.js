import { useFetchGifs } from '../hooks/useFetchGifs';

describe('pruebas con hooks useFetchGifs', () => {

    test('Debe de retorna el estado inicial ', () => {

        const { data, loading } = useFetchGifs( 'one punch');


        console.log( data, loading );

    });


});