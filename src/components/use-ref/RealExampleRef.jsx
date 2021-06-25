import React, { useState } from 'react';

import { MultipleHooks } from '../examples/MultipleHooks.jsx';

export const RealExampleRef = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            <button
                className="btn btn-primary mt-3"
                onClick={() => setShow(!show)}
            >
                Mostar Citas
            </button>
            {show && <MultipleHooks />}
        </>
    );
};
