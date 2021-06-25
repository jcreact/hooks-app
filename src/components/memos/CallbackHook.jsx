import React, { useCallback, useEffect, useState } from 'react';

import { ShowIncrement } from './ShowIncrement.jsx';

export const CallbackHook = () => {
    const [counter, setCounter] = useState(10);

    // Como la función se vuelve a crear cada vez que el componente 'CallbackHook'
    // se renderiza, el 'ShowIncrement'también lo hace.
    // const increment = () => setCounter(counter + 1);

    // Una alternativa es utilizar el useCallback, para la función.
    //Y memorizar el ShowIncrement (con React.memo()).
    const increment = useCallback(
        (factor = 1) => {
            setCounter((c) => c + factor);
        },
        [setCounter]
    );

    //Nota: Cuando se utiliza un useEffect y la dependencia es una función,
    //también se utiliza useCallback.Así sólo se ejecuta cuando la función cambie.
    useEffect(() => {
        console.log('useEffect[increment]');
    }, [increment]);

    return (
        <>
            <h1 className="mt-3">
                Ejemplo del Hook{' '}
                <small className="text-muted">useCallback</small>
            </h1>
            <hr />
            <p>Contador: {counter}</p>
            <ShowIncrement increment={increment} />
        </>
    );
};
