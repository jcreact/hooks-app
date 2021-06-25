import { useEffect, useState } from 'react';

export const useFetch = (url) => {

    const [state, setState] = useState({ data: null, error: null, loading: true });

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
                setState({
                    loading: false,
                    error: null,
                    data
                })
            );

    }, [url]);

    return state;

};
