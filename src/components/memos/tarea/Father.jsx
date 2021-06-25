import React, { useCallback, useState } from 'react';

// Componentes
import { Son } from './Son.jsx';

/**
 * Componente para ejemplificar el uso del Hook `useCallback`, dicha
 * función se establece como argumento al componente `Son`.
 */
export const Father = () => {
    const numbers = [2, 4, 6, 8, 10];
    const [value, setValue] = useState(0);

    const increment = useCallback(
        /**
         * @param {number} factor - Factor incrementador.
         */
        (factor) => setValue((v) => v + factor),
        [setValue]
    );

    return (
        <>
            <h1 className="mt-3">Tarea Memo</h1>
            <hr />
            <p>Total: {value}</p>
            {numbers.map((n) => (
                <Son key={n} value={n} increment={increment} />
            ))}
        </>
    );
};
