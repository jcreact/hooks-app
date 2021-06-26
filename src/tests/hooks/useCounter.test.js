import { renderHook, act } from '@testing-library/react-hooks';

// Hook
import { useCounter } from '../../hooks/useCounter';


describe('Pruebas en el Hook "useCounter.js"', () => {

    test('Debe retorar los valores por defecto.', () => {
        const { result: { current } } = renderHook(() => useCounter());

        expect(current.counter).toBe(0);
        expect(typeof current.increment).toBe('function');
        expect(typeof current.decrement).toBe('function');
        expect(typeof current.reset).toBe('function');
    });

    test('Debe retornar el counter con un valor de 100.', () => {
        const valor = 100;
        const { result: { current } } = renderHook(() => useCounter(valor));
        expect(current.counter).toBe(valor);
    });

    test('Debe incrementar el counter en 1.', () => {
        const valor = 10;
        const { result } = renderHook(() => useCounter(valor));
        const { increment } = result.current;

        act(increment);
        expect(result.current.counter).toBe(valor + 1);

        // En caso que factor no sea un número también debe incrementar en 1.
        act(() => increment('dummy'));
        expect(result.current.counter).toBe(valor + 2);
    });

    test('Debe incrementar el counter en un factor de 5.', () => {
        const valor = 10;
        const factor = 5;
        const { result } = renderHook(() => useCounter(valor));
        const { increment } = result.current;

        act(() => increment(factor));
        expect(result.current.counter).toBe(valor + factor);
    });

    test('Debe decrementar el counter en 1.', () => {
        const valor = 10;
        const { result } = renderHook(() => useCounter(valor));
        const { decrement } = result.current;

        act(decrement);
        expect(result.current.counter).toBe(valor - 1);

        // En caso que factor no sea un número también debe decrementar en 1.
        act(() => decrement('dummy'));
        expect(result.current.counter).toBe(valor - 2);
    });

    test('Debe decrementar el counter en un factor de 5.', () => {
        const valor = 10;
        const factor = 5;
        const { result } = renderHook(() => useCounter(valor));
        const { decrement } = result.current;

        act(() => decrement(factor));
        expect(result.current.counter).toBe(valor - factor);
    });

    test('Debe restablecer el counter en 10.', () => {
        const valor = 10;
        const { result } = renderHook(() => useCounter(valor));
        const { increment, reset } = result.current;

        act(() => increment(134));
        act(reset);
        expect(result.current.counter).toBe(valor);
    });

});
