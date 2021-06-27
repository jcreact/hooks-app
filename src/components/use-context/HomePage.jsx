import React, { useContext } from 'react';

import { UserContext } from './UserContext';

export const HomePage = () => {
    const { user } = useContext(UserContext);

    return (
        <>
            <h1 className="mt-3">Home Page</h1>
            <hr />
            <pre className="font-monospace">
                {JSON.stringify(user, null, 3)}
            </pre>
        </>
    );
};
