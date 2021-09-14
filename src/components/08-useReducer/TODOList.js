import React from 'react'
import { TODOListItem } from './TODOListItem'
import PropTypes from 'prop-types';

export const TODOList = ({ todos, handleDelete, handleToggle }) => {
    return (
        <ul className="list-group list-group-flush">
        {
            todos.map( (todo, i) => {
                return <TODOListItem 
                        index={ i }
                        todo={ todo }
                        handleDelete={ handleDelete }
                        handleToggle={ handleToggle } />
            })
        }
        </ul>
    )
}

TODOList.propTypes = {
    todos: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleToggle: PropTypes.func.isRequired,
}
