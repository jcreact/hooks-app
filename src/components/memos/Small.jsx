import React from 'react';

/**
 * Renderiza un small con un valor.
 *
 * Nota: En caso que el value no cambio, no se vuelve a renderizar.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {number} props.value es el valor a mostrar en la etiqueta small.
 */
export const Small = React.memo(({ value }) => {
    console.log('Small[show]');

    return <small>{value}</small>;
});
