import React from 'react';

export const Spinner = () => {
    return (
        <div className="d-flex justify-content-center mt-3 mb-3 animate__animated animate__fadeIn">
            <div
                className="spinner-border text-primary"
                style={{ width: '4rem', height: '4rem' }}
                role="status"
            >
                <span className="sr-only" />
            </div>
        </div>
    );
};
