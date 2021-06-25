import React, { useEffect, useState } from 'react';

import { Message } from './Message.jsx';

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
    });

    const { name, email } = formState;

    useEffect(() => {}, []);

    useEffect(() => {}, [formState]);

    useEffect(() => {}, [email]);

    /**
     * Maneja el evento onChange del input para el nombre.
     *
     * @param {React.ChangeEvent<HTMLInputElement>} evt
     */
    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value,
        });
    };

    return (
        <>
            <h1 className="mt-3">Ejemplo de useEffect</h1>
            <hr />
            <div className="form-grup">
                <input
                    className="form-control"
                    type="text"
                    name="name"
                    placeholder="Escriba su nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>
            {name === 'root' && <Message />}
            <div className="form-grup mt-3">
                <input
                    className="form-control"
                    type="text"
                    name="email"
                    placeholder="mail@dominio.com"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>
        </>
    );
};
