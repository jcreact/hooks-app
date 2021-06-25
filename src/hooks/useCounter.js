import { useState } from 'react';

/**
 * Gestiona el estado de un contador.
 * 
 * @param {number} [value = 0] Es el valor inicial del contador. 
 * @returns {{
 *   counter: number, 
 *   increment: (factor?: number) => void, 
 *   decrement: (factor?: number) => void,
 *   reset: () => void
 * }}
 *   Hook para el manejo de un contador.
 */
export const useCounter = (value = 0) => {

    const [counter, setCounter] = useState(value);

    const increment = (factor = 1) => {
        setCounter(s => s + (typeof factor === 'number' ? factor : 1));
    };

    const decrement = (factor = 1) => {
        setCounter(s => s - (typeof factor === 'number' ? factor : 1));
    };

    const reset = () => {
        setCounter(value);
    };

    return {
        counter,
        increment,
        decrement,
        reset
    };

};