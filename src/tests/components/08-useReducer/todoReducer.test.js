
import { demoTodos } from '../../fixtures/demoTodos';
import { todoReducer } from './../../../components/08-useReducer/todoReducer';

describe('Tests on todoReducer', () => {
   
    test('should return the default state', () => {
       
        const state = todoReducer( demoTodos, {} );

        expect( state ).toEqual( demoTodos );

    });

    test('should add a new TODO', () => {
       
        const newTodo = { 
            id: 3,
            description: 'Po ipsum',
            done: false 
        };

        const state = todoReducer( demoTodos, {
            type: 'Add',
            payload: newTodo
        });

        expect( state.length ).toBe( 3 );
        expect( state ).toEqual( [ ...demoTodos, newTodo] );

    });

    test('should delete a TODO', () => {
       
        const state = todoReducer( demoTodos, {
            type: 'Delete',
            payload: 1
        });

        expect( state.length ).toBe( 1 );
        expect( state ).toEqual( [ demoTodos[1] ] );

    });

    test('should execute the TOGGLE of the TODO', () => {
       
        const state = todoReducer( demoTodos, {
            type: 'Toggle',
            payload: 2
        });

        expect( state[0].done ).toBeFalsy();
        expect( state[0] ).toEqual( demoTodos[0] ); // the item that didn't change
        expect( state[1].done ).toBeTruthy();

    });
    
    
    

});
