import { useEffect, useState, useRef } from "react";

export const useFetch = ( url ) => {
    
    const isMounterd = useRef(true);
    const [state, setState] = useState({ data: null, loading: true, error: null });

    useEffect(() => {
        return () => {
            isMounterd.current = false;
        }
    }, [])

    useEffect(() => {

        setState({
            loading: true,
            error: null,
            data: null
        });
        
        fetch( url )
            .then( resp => resp.json() )
            .then( data => {

                if ( !isMounterd.current ) {
                    setState({
                        loading: false,
                        error: null,
                        data: data
                    });
                }
            })
        
    }, [url])

    return state;
}
