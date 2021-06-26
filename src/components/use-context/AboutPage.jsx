import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const AboutPage = () => {
    const { user, setUser } = useContext(UserContext);

    return (
        <>
            <h1 className="mt-3">About</h1>
            <hr />
            <button
                type="submit"
                className="btn btn-outline-danger btn-lg"
                onClick={() => setUser({})}
            >
                Logout
            </button>
            <pre className="mt-3">{JSON.stringify(user, null, 2)}</pre>
        </>
    );
};
