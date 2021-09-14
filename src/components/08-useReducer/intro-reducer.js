
const initialState = [{
    id: 1, 
    todo: 'Kaufen Brot',
    done: false
}];

const todoReducer = ( state = initialState, action ) => {

    if ( action?.type === 'add' ) {
        return [ ...state, action.payload ];
    }

    return state;
}

let todos = todoReducer();

const newTodo = {
    id: 2, 
    todo: 'Kaufen Milch',
    done: false
}

const addAction = {
    type: 'add',
    payload: newTodo
}

todos =  todoReducer( todos, addAction );


console.log(todos);