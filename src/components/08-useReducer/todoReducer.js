
export const todoReducer = ( state = [], action ) => {

    switch ( action.type ) {
        
        case 'Add':
            return [ ...state, action.payload ];

        case 'Delete':
            // filter returns a new array without the one that match the criteria
            return state.filter( todo => todo.id !== action.payload )
    
        case 'Toggle':
            return state.map( todo => 
                ( todo.id === action.payload ) 
                    ? { ...todo, done: !todo.done }
                    : todo    
            )

        case 'Toggle-old':
            return state.map( todo => {
                if( todo.id === action.payload ) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                else {
                    return todo;
                }
            });

        // it's been called the first time 
        default:
            return state;
    }

}