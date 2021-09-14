import React, { useEffect, useReducer } from 'react'
import { useForm } from '../hooks/useForm';
import './styles.css'
import { todoReducer } from './todoReducer';

const init = () => {
    return JSON.parse(localStorage.getItem('TODOS')) || [];
    // if there are not TODOs we return an empty array
}

export const TODOApp = () => {
    
    const [ todos, dispatch ] = useReducer(todoReducer, [], init);

    const [ { description }, handleInputChange, reset ] = useForm({
        description: ''
    });

    useEffect(() => {
        localStorage.setItem('TODOS', JSON.stringify( todos ));
    }, [todos]);

    const handleDelete = ( todoId ) => {
      
        const deleteAction = {
            type: 'Delete',
            payload: todoId
        };

        dispatch( deleteAction );
    }

    const handleToggle = ( todoId ) => {
        dispatch({
            type: 'Toggle',
            payload: todoId
        });
    }

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

        const addAction = {
            type: 'Add',
            payload: newTODO
        };

        dispatch( addAction );
        reset();
    }

    
    return (
        <div>
            <h1>TODO App ({ todos.length })</h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <ul className="list-group list-group-flush">
                    {
                        todos.map( (todo, i) => {
                            return <li 
                                key={ todo.id }
                                className="list-group-item">
                                <p 
                                    className={ `${ todo.done && 'complete' }` }
                                    onClick={ () => handleToggle(todo.id) }> { i + 1 }. { todo.description } </p>
                                <button
                                    className="btn btn-danger"
                                    onClick={ () => handleDelete(todo.id) }>
                                        Delete
                                </button>
                            </li>
                        })
                    }
                    </ul>
                </div>
                <div className="col-5">
                    
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
            </div>
        </div>
    )
}
