import React, { useLayoutEffect, useState } from 'react'
import './layout.css';
import { useCounter } from '../hooks/useCounter';
import { useFetch } from '../hooks/useFetch';
import { useRef } from 'react';

export const Layout = () => {

    const { counter, increment } = useCounter( 1 );
    const { data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${counter}` );
    
    // !!data permite validar si tiene valor
    const { quote } = !!data && data[0];

    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({});

    // we can use this hook to get the dimensions of components once they have been rendered
    useLayoutEffect(() => {
       setBoxSize( pTag.current.getBoundingClientRect( ) );
        return () => {
            
        };
    }, [quote])

    return (
        <div>
            <h1>Layout - Breaking Bad Quotes</h1>
            <hr />
            
            <blockquote className="blockquote text-right">
                <p 
                    className="mb-0"
                    ref={ pTag }>{ quote }</p>
            </blockquote>

            <pre>
                { JSON.stringify( boxSize, null, 3 ) }
            </pre>
                 

            <button className="btn btn-primary" onClick={ () => increment(1) }>
                Next quote
            </button>

        </div>
    )
}
