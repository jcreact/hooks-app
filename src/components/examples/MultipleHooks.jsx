import React from 'react';

import { Spinner } from '../Spinner.jsx';

import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter.js';

export const MultipleHooks = () => {
    const { counter, increment } = useCounter(1);

    const { loading, data } = useFetch(
        `https://www.breakingbadapi.com/api/quotes/${counter}`
    );

    const { author, quote, series } = !!data && data[0];
    return (
        <>
            <h1 className="mt-3">BreakingBad Quotes</h1>
            <hr />
            {loading ? (
                <Spinner />
            ) : (
                <figure className="text-end border border-1 border-success rounded-3 shadow">
                    <blockquote className="blockquote me-3 mt-2">
                        <p>{quote}</p>
                    </blockquote>
                    <figcaption className="blockquote-footer me-3">
                        {author} <cite>"{series}"</cite>
                    </figcaption>
                </figure>
            )}
            <button
                className="btn btn-outline-primary"
                disabled={loading}
                onClick={increment}
            >
                <i className="bi bi-caret-right-fill" /> Siguiente
            </button>
        </>
    );
};
