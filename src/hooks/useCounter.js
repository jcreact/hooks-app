import { useState } from 'react';

/**
 * Gestiona el estado de un contador.
 * @customHook
 * 
 * @param {number} [value = 0] Es el valor inicial del contador. 
 * @returns {{
 *   state: number, 
 *   increment: (factor?: number) => void, 
 *   decrement: (factor?: number) => void
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

    return {
        state,
        increment,
        decrement
    };

};