import { useState } from 'react';

/**
 * Gestiona el estado de un contador.
 * 
 * @param {number} [value = 0] Es el valor inicial del contador. 
 * @returns {{
 *   state: number, 
 *   increment: (factor?: number) => void, 
 *   decrement: (factor?: number) => void,
 *   reset: () => void
 * }}
 *   Hook para el manejo de un contador.
 */
export const useCounter = (value = 0) => {

    const [state, setState] = useState(value);

    const increment = (factor = 1) => {
        setState(s => s + factor);
    };

    const decrement = (factor = 1) => {
        setState(s => s - factor);
    };

    const reset = () => {
        setState(value);
    };

    return {
        state,
        increment,
        decrement,
        reset
    };

};