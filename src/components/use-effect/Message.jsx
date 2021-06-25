import React, { useEffect, useState } from 'react';

export const Message = () => {
    const [coors, setCoors] = useState({ x: 0, y: 0 });
    const { x, y } = coors;

    // Cuando el componente se muestra por primera vez.
    useEffect(() => {
        /**
         * @param {MouseEvent} evt
         */
        const mouseMove = ({ x, y }) => {
            setCoors({ x, y });
        };

        window.addEventListener('mousemove', mouseMove);

        return () => {
            window.removeEventListener('mousemove', mouseMove);
        };
    }, []);

    return (
        <>
            <small className="form-text text-danger">
                'root' no está permitido
            </small>
            <p>
                x: {x}, y: {y}
            </p>
        </>
    );
};
