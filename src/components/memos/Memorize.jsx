import React, { useState } from 'react';

// Componentes
import { Small } from './Small.jsx';

// Hooks
import { useCounter } from '../../hooks/useCounter';

export const Memorize = () => {
    const { counter, increment } = useCounter(10);

    const [show, setShow] = useState(true);

    return (
        <>
            <h1 className="mt-3">Ejemplo de React.memo</h1>
            <hr />
            <p>
                Contador: <Small value={counter} />
            </p>
            <button className="btn btn-primary" onClick={increment}>
                <i className="bi bi-plus-lg" />
            </button>
            <button
                className="btn btn-outline-primary ms-2"
                onClick={() => setShow(!show)}
            >
                Mostrar {JSON.stringify(show)}
            </button>
        </>
    );
};
