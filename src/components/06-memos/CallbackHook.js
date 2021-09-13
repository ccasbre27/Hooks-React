import React, { useCallback, useState } from 'react'
import '../02-useEffect/effects.css';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState( 10 );

    // when we send a function to a child component and this
    // function changes then the child component will be redered again
    // that's why we need to use useCallback
    // even if the function is a dependency of useEffect we should use useCallback
    // it should be used when the parameters of the function might change
    const increment = useCallback(
        (factor) => {
            setCounter( c => c + factor );
        },
        [ setCounter ],
    )


    return (
        <div>
            <h1>useCallBack Hook: { counter }</h1>
            <hr />
            <ShowIncrement increment={ increment } />
        </div>
    )
}
