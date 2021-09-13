import React, { useState } from 'react'
import './counter.css';

export const CounterApp = () => {

    const [counters, setCounters] = useState({
        counter1: 10,
        counter2: 20
    });

    const { counter1, counter2 } = counters;

    return (
        <div>
            <h1>counter1: { counter1 } </h1>
            <h1>counter2: { counter2 } </h1>
            <hr />
            <button 
                className="btn btn-primary"
                onClick={ () => { 
                    setCounters({ 
                        ...counters, // get all the state as it is
                        counter1: counter1 + 1 // overwrites the state for this counter
                    }); 
                }}>
                +1
            </button>
        </div>
    )
}
