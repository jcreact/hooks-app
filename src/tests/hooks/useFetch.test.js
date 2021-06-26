import { renderHook } from '@testing-library/react-hooks';
import { useFetch } from '../../hooks/useFetch';



describe(`Pruebas en el Hook 'useFetch.js'.`, () => {

    const url = 'https://www.breakingbadapi.com/api/quotes/2';

    test(`Debe retornar el estado inicial.`, () => {

        const { result } = renderHook(() => useFetch(url));

        const { data, error, loading } = result.current;
        expect(data).toBeNull();
        expect(error).toBeNull();
        expect(loading).toBeTruthy();

    });

    test(`Debe retornar una cita de Breaking Bad.`, async () => {

        const { result, waitForNextUpdate } = renderHook(() => useFetch(url));
        await waitForNextUpdate({ timeout: 5000 });

        const { data, error, loading } = result.current;

        expect(data).toHaveLength(1);
        expect(error).toBeNull();
        expect(loading).toBeFalsy();

    });

    test('Debe manejar la excepción en caso de errores.', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetch('https://reqres.in/apid/users/15'));
        await waitForNextUpdate();
        const { data, error, loading } = result.current;

        console.log(data);

        expect(data).toBeNull();
        expect(error).toBe('No se pudo procesar la información');
        expect(loading).toBeFalsy();

    });

});
