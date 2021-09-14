import React, { useEffect, useReducer } from 'react'
import { useForm } from '../hooks/useForm';
import './styles.css'
import { TodoAdd } from './TodoAdd';
import { TODOList } from './TODOList';
import { todoReducer } from './todoReducer';

const init = () => {
    // if there are not TODOs we return an empty array
    return JSON.parse(localStorage.getItem('TODOS')) || [];
}

export const TODOApp = () => {
    
    const [ todos, dispatch ] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('TODOS', JSON.stringify( todos ));
    }, [todos]);

    const handleDelete = ( todoId ) => {
        dispatch({
            type: 'Delete',
            payload: todoId
        });
    }

    const handleToggle = ( todoId ) => {
        dispatch({
            type: 'Toggle',
            payload: todoId
        });
    }

    const handleAddTODO = ( newTODO ) => {
        dispatch({
            type: 'Add',
            payload: newTODO
        });
    }
    
    return (
        <div>
            <h1>TODO App ({ todos.length })</h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TODOList 
                        todos={ todos } 
                        handleDelete={ handleDelete } 
                        handleToggle={ handleToggle } />
                </div>
                <div className="col-5">
                    
                    <TodoAdd 
                        handleAddTODO={ handleAddTODO } />
                    
                </div>
            </div>
        </div>
    )
}
