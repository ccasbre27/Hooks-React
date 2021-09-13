import React, { useMemo, useState } from 'react'
import { hardProcess } from '../../helpers/hardProcess';
import '../02-useEffect/effects.css';
import { useCounter } from '../hooks/useCounter';

export const MemoHook = () => {

    const { counter, increment } = useCounter( 5000 );
    const [show, setShow] = useState(false);

    const memoHardProcess = useMemo(() => hardProcess( counter ), [ counter ]); 

    return (
        <div>
            <h1>Memo Hook</h1>
            <h3>Counter: <small>{ counter }</small></h3>
            <hr />

            <p>Hard process { memoHardProcess } </p>

            <button
                className="btn btn-primary"
                onClick={ () => increment(1) }>
                +1
            </button>

            <button
                className="btn btn-outline-primary ml-3"
                onClick={ () => setShow(!show) }>
                Show/Hide { JSON.stringify( show ) }
            </button>
        </div>
    )
}
