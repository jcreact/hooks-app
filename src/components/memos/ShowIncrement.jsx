import React from 'react';
import PropTypes from 'prop-types';

/**
 * Componente memorizado, que contiene un botón que incrementa un valor.
 */
export const ShowIncrement = React.memo(
    /**
     * @param {Object} props - Propiedades del componente.
     * @param {(factor?: number) => void} props.increment - Función incrementadora.
     */
    ({ increment }) => {
        console.log('ShowIncrement[show]');

        return (
            <button className="btn btn-primary" onClick={() => increment(3)}>
                <i className="bi bi-plus-lg" />
            </button>
        );
    }
);

// Especificación de tipos de las propiedades.
ShowIncrement.propTypes = {
    increment: PropTypes.func.isRequired,
};
