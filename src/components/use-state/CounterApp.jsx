import React, { useState } from 'react';

export const CounterApp = () => {
    const [state, setSate] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40,
    });

    const { counter1, counter2 } = state;

    /**
     * Maneja el evento click del botón, para incrementar el contador1.
     *
     * @param {React.MouseEvent<HTMLButtonElement>} evt Evento click del botón.
     */
    const handleClick = (evt) => {
        setSate((state) => ({ ...state, counter1: counter1 + 1 }));
    };

    return (
        <>
            <div className="row">
                <div className="col">
                    <h2 className="mt-3">Contador #1: {counter1}</h2>
                </div>
                <div className="col">
                    <h2 className="mt-3">Contador #2: {counter2}</h2>
                </div>
            </div>
            <hr />
            <button className="btn btn-primary" onClick={handleClick}>
                +1
            </button>
        </>
    );
};
