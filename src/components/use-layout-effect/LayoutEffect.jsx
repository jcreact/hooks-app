import React, { useLayoutEffect, useRef } from 'react';

import { Spinner } from '../Spinner.jsx';

import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter.js';

export const LayoutEffect = () => {
    const { counter, increment } = useCounter(1);

    const { loading, data } = useFetch(
        `https://www.breakingbadapi.com/api/quotes/${counter}`,
        500
    );

    const { author, quote, series } = !!data && data[0];

    const quoteRef = useRef();

    useLayoutEffect(() => {
        console.log(quoteRef.current.getBoundingClientRect());
    }, [quote]);

    return (
        <>
            <h1 className="mt-3">
                BreakingBad Quotes
                <small className="text-muted"> useLayoutEffect</small>
            </h1>
            <hr />

            <figure className="text-end border border-1 border-success rounded-3 shadow">
                {loading && <Spinner />}
                <blockquote className="blockquote me-3 mt-2">
                    <p ref={quoteRef}>{quote}</p>
                </blockquote>
                <figcaption
                    className={`${!loading && 'blockquote-footer'} me-3`}
                >
                    {author} <cite>{series}</cite>
                </figcaption>
            </figure>

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
