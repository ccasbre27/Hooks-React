import React from 'react'
import { useForm } from '../hooks/useForm';

export const TodoAdd = ({ handleAddTODO }) => {

    const [ { description }, handleInputChange, reset ] = useForm({
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if ( description.trim().length <= 1 ) {
            return;
        }

        const newTODO = {
            id: new Date().getTime(),
            description: description,
            done: false
        };

        handleAddTODO( newTODO );
        reset();

    }

    return (
        <div>
            <h4>Add TODO</h4>
            <hr />

            <form onSubmit={ handleSubmit }>
                <input 
                    type="text"
                    name="description"
                    className="form-control"
                    placeholder="Learn..."
                    autoComplete="off" 
                    value={ description }
                    onChange={ handleInputChange } />

                <button
                    type="submit"
                    className="btn btn-outline-primary mt-1 btn-block">
                    Add
                </button>
            </form>
        </div>
    )
}
