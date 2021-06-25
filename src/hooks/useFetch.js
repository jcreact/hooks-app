import { useEffect, useRef, useState } from 'react';

export const useFetch = (url, wait = 0) => {

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
            .then(data =>
                setTimeout(() => {
                    if (isMounted.current) {
                        setState({
                            loading: false,
                            error: null,
                            data
                        });
                    }
                }, wait)
            );

    }, [url, wait]);

    return state;

};
