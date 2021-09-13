import React from 'react'
import { useState } from 'react';
import '../02-useEffect/effects.css';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';

export const RealExampleRef = () => {

    const [show, setShow] = useState(false);

    const handleShowHide = () => {
        setShow( !show );
    }

    return (
        <div>
            <h1>Real Example Ref</h1>
            <hr />
            { show && <MultipleCustomHooks /> }
            <button 
                className="btn btn-primary mt-5"
                onClick={ handleShowHide }>
                Show/Hide
            </button>
        </div>
    )
}
