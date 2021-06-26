import { useEffect, useRef, useState } from 'react';

export const useFetch = (url) => {

    const isMounted = useRef(true);
    const [state, setState] = useState({ data: null, error: null, loading: true });

    useEffect(() => {
        return () => {
            isMounted.current = false;
        };
    }, []);

    const reset = () => setState({
        data: null,
        error: null,
        loading: true
    });

    useEffect(() => {
        reset();
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                if (isMounted.current) {
                    setState({
                        loading: false,
                        error: null,
                        data
                    });
                }
            }).catch(() =>
                setState({
                    data: null,
                    loading: false,
                    error: 'No se pudo procesar la información'
                })
            );

    }, [url]);

    return state;

};
