import React from 'react'
import PropTypes from 'prop-types';

export const TODOListItem = ({ index, todo, handleDelete, handleToggle }) => {
    return (
        <li 
            key={ todo.id }
            className="list-group-item">
            <p 
                className={ `${ todo.done && 'complete' }` }
                onClick={ () => handleToggle(todo.id) }> { index + 1 }. { todo.description } </p>
            <button
                className="btn btn-danger"
                onClick={ () => handleDelete(todo.id) }>
                    Delete
            </button>
        </li>
    )
}

TODOListItem.propTypes = {
    index: PropTypes.number.isRequired,
    todo: PropTypes.object.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleToggle: PropTypes.func.isRequired,
}