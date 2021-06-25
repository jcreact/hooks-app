import React from 'react';

import { useCounter } from '../../hooks/useCounter';

/**
 * Componente para visualizar un contador.
 *
 * @returns {JSX.Element} Renderización HTML del componente.
 */
export const CounterWithHook = () => {
    const { counter, increment, decrement, reset } = useCounter(10);

    return (
        <>
            <h1 className="mt-3">Contador con Hook Personalizado</h1>
            <hr />
            <p>Contador: {counter}</p>
            <button
                className="btn btn-danger me-2"
                onClick={() => decrement(2)}
            >
                -1
            </button>
            <button className="btn btn-secondary me-2" onClick={() => reset()}>
                Restablecer
            </button>
            <button className="btn btn-primary" onClick={() => increment(2)}>
                +1
            </button>
        </>
    );
};
