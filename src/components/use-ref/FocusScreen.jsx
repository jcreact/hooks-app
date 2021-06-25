import React, { useRef } from 'react';

export const FocusScreen = () => {
    const inputRef = useRef();

    /**
     *
     * @param {React.MouseEvent<HTMLButtonElement>} evt
     */
    const handleClick = (evt) => {
        // document.querySelector('input').select();
        inputRef.current.select();
    };

    return (
        <>
            <h1 className="mt-3">Focus Screen</h1>
            <hr />
            <div className="input-group mb-3">
                <span className="input-group-text">Nombre</span>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Escriba su nombre"
                    ref={inputRef}
                />
            </div>
            <button className="btn btn-outline-success" onClick={handleClick}>
                Focus
            </button>
        </>
    );
};
