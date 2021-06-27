import React, { useContext } from 'react';
import { useForm } from '../../hooks/useForm';
import { UserContext } from './UserContext';

export const LoginPage = () => {
    const [{ email, name, password }, handleInputChange, reset] = useForm({
        email: 'palmahn@gmail.com',
        name: 'José Palma',
        password: '',
    });

    const { setUser } = useContext(UserContext);

    /**
     * @param {React.FormEvent<HTMLFormElement>} evt
     */
    const handleSubmit = (evt) => {
        evt.preventDefault();
        setUser({ id: new Date().getTime(), name, email });
        reset();
        document.querySelector(`input[name:'email']`).select();
    };

    return (
        <div
            className="d-flex flex-column justify-content-center align-items-center"
            style={{ height: '90vh' }}
        >
            <div
                className="border border-1 border-dark bg-dark shadow"
                style={{ width: '40vw', borderRadius: '8px' }}
            >
                <form className="my-4 mx-3" onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="."
                            autoComplete="off"
                            autoFocus
                            name="email"
                            value={email}
                            onChange={handleInputChange}
                        />
                        <label>Email</label>
                    </div>
                    <div className="form-floating mb-4">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="."
                            autoComplete="off"
                            name="password"
                            value={password}
                            onChange={handleInputChange}
                        />
                        <label>Password</label>
                    </div>
                    <div className="d-grid col-6 mx-auto">
                        <button
                            type="submit"
                            className="btn btn-outline-secondary btn-lg text-light"
                            style={{ borderRadius: '25px' }}
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
