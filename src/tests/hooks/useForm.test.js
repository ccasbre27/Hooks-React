import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../components/hooks/useForm';

describe('Tests on useForm', () => {
   
    const initialForm = {
        name: 'Pepe',
        email: 'pepe@gmail.com'
    };

    test('should return a form by default', () => {
        
        const { result } = renderHook( () => useForm( initialForm ) ); 
        const [ values, handleInputChange, reset ] = result.current;
        expect( values ).toEqual( initialForm );
        expect( typeof handleInputChange ).toBe( 'function' );
        expect( typeof reset ).toBe( 'function' );
    
    });

    test('should change the value of the form', () => {
        // debe teener el target y value. Cambiar sólo el name 
        const { result } = renderHook( () => useForm( initialForm ) ); 
        const [ , handleInputChange ] = result.current;
        const newName = 'Juan';
        const event = {
            target: { name: 'name', value: newName }
        };

        // call to functions must be inside of the act method
        act( () => {
            handleInputChange( event );
        });

        const [ values ] = result.current;
        expect( values ).toEqual( { ...initialForm, name: newName } );


    });
    
    test('should reset the form', () => {
        // call reset
        const { result } = renderHook( () => useForm( initialForm ) ); 
        const [ , handleInputChange, reset ] = result.current;
        const newName = 'Juan';
        const event = {
            target: { name: 'name', value: newName }
        };

        // call to functions must be inside of the act method
        act( () => {
            handleInputChange( event );
            reset();
        });

        const [ values ] = result.current;
        expect( values ).toEqual( initialForm );
    
    });
    

});
