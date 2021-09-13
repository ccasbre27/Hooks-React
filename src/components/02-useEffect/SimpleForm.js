import React, { useState, useEffect } from 'react'
import './effects.css';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    useEffect( () => {
        console.log('hey');
    });

    const handleInputChange = (e) => {
        console.log(e.target.value);
    }

    return (
        <div>
            <h1>useEffect</h1>
            <hr />
            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter your name"
                    autoComplete="off" 
                    value={ name }
                    onChange={ handleInputChange } />
            </div>
        </div>
    )
}
