import { useFetchGifs } from '../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('pruebas con hooks useFetchGifs', () => {

    test('Debe de retorna el estado inicial ', () => {

        const { result } = renderHook( () => useFetchGifs( 'One Punch')  );

        const  { data, loading } = result.current;

        expect( data ).toEqual([]);
        expect( loading ).toBe(true);

       //  constante del valor de hook  const { data, loading } = useFetchGifs( 'one punch');

        //  imprime valores de constante hooks console.log( data, loading );
    });
});