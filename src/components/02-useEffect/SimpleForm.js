import React, { useState, useEffect } from 'react'
import './effects.css';
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    useEffect( () => {
        console.log('hey');
    }, []);

    useEffect( () => {
        console.log('formState cambió');
    }, [formState]);

    useEffect( () => {
        console.log('email cambió');
    }, [email]);

    const handleInputChange = ({ target }) => {
        console.log(target.value);
        setFormState({
            ...formState,
            [ target.name ]: target.value
        });
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

            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="email@gmail.com"
                    autoComplete="off" 
                    value={ email }
                    onChange={ handleInputChange } />
            </div>

            { (name === '123') && <Message /> }

        </div>
    )
}
