import React from 'react';
import PropTypes from 'prop-types';

/**
 *
 * @param {Object} props - Propiedades del componente.
 * @param {(factor?: number) => void} props.increment
 * @returns
 */
export const ShowIncrement = React.memo(({ increment }) => {
    console.log('ShowIncrement[show]');

    return (
        <button className="btn btn-primary" onClick={() => increment(3)}>
            <i className="bi bi-plus-lg" />
        </button>
    );
});

ShowIncrement.propTypes = {
    increment: PropTypes.func.isRequired,
};
