import { useFetchGifs } from '../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('pruebas con hooks useFetchGifs', () => {

    test('Debe de retorna el estado inicial ', async() => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch')  );
        

        const  { data, loading } = result.current;

        await waitForNextUpdate();

        expect( data ).toEqual([]);
        expect( loading ).toBe(true);

       //  constante del valor de hook  const { data, loading } = useFetchGifs( 'one punch');

        //  imprime valores de constante hooks console.log( data, loading );
    });

    test( 'debe retornar un arreglo de img y el loading en false', async() => {


        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch')  );
        await waitForNextUpdate();

        const  { data, loading } = result.current;

        expect( data.length).toBe(10);
        expect( loading ).toBe(false);

    } );

});