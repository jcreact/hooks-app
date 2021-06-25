import React, { useMemo, useState } from 'react';

// Hooks
import { useCounter } from '../../hooks/useCounter';

// Helpers
import { heavyProcess } from '../../helpers/heavyProcess';

export const MemoHook = () => {
    const { counter, increment } = useCounter(5000);
    const [show, setShow] = useState(true);

    // Se llama únicamente cuando el counter (dependencia) cambia.
    // Nota: Si el proceso 'heavyProcess' es llamado directamente, se llama cuando
    // cualquier valor del componente cambie.
    const heavyProcessMemo = useMemo(() => heavyProcess(counter), [counter]);

    return (
        <>
            <h1 className="mt-3">Ejemplo de useMemo</h1>
            <hr />
            <p>
                Contador: <small>{counter}</small>
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
            <p>{heavyProcessMemo}</p>
        </>
    );
};
