import React, { useEffect } from 'react';

import { useForm } from '../../hooks/useForm';

export const FormWithHook = () => {
    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
    });

    const { name, email, password } = formValues;

    useEffect(() => {
        console.log('email was change');
    }, [email]);

    /**
     *
     * @param {React.FormEvent<HTMLFormElement>} evt
     */
    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(formValues);
    };

    return (
        <>
            <h1 className="mt-3">Formulario con Custom Hook</h1>
            <hr />
            <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                    <span className="input-group-text">Nombre</span>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Escriba su nombre"
                        autoComplete="off"
                        autoFocus
                        value={name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">Correo</span>
                    <input
                        type="text"
                        className="form-control"
                        name="email"
                        placeholder="mail@dominio.com"
                        autoComplete="off"
                        value={email}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">Contraseña</span>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        autoComplete="off"
                        value={password}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Registrar
                </button>
            </form>
        </>
    );
};
