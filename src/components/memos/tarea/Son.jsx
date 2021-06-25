import React from 'react';
import PropTypes from 'prop-types';

/**
 * Componente memorizado, que contiene un botón que incrementa un valor
 * con un factor determinado.
 */
export const Son = React.memo(
    /**
     * @param {Object} props - Propiedades del componente.
     * @param {number} props.value - Factor incrementador.
     * @param {(factor: number) => void} props.increment - Función incrementadora.
     */
    ({ value, increment }) => {
        console.log(`Son[show]`);
        return (
            <button
                className="btn btn-primary me-2"
                onClick={() => increment(value)}
            >
                <i className="bi bi-plus"></i> {value}
            </button>
        );
    }
);

// Especificación de tipos de las propiedades.
Son.propTypes = {
    value: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
};
