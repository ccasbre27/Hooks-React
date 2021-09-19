import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from '../../components/hooks/useCounter';

describe('Tests on useCounter', () => {
    
    test('should return default values', () => {
        
        const { result } = renderHook( () => useCounter() );
        expect( result.current.counter ).toBe( 10 );
        expect( typeof result.current.increment ).toBe( 'function' );
        expect( typeof result.current.decrement ).toBe( 'function' );
        expect( typeof result.current.reset ).toBe( 'function' );

    });

    test('should have the counter equals to the sent value', () => {
       
        const { result } = renderHook( () => useCounter( 100 ) );
        expect( result.current.counter ).toBe( 100 );

    });

    test('should increment the counter by 1', () => {
       
        const { result } = renderHook( () => useCounter( 100 ) );
        const { increment } = result.current;

        // call to functions must be inside of the act method
        act( () => {
            increment();
        });

        const { counter } = result.current;
        expect( counter ).toBe( 101 );

    });

    test('should decrement the counter by 1', () => {
        
        const { result } = renderHook( () => useCounter( 10 ) );
        const { decrement } = result.current;

        act( () => {
            decrement();
        });

        const { counter } = result.current;
        expect( counter ).toBe( 9 );

    });

    test('should reset the counter', () => {
        
        const { result } = renderHook( () => useCounter( 10 ) );
        const { decrement, reset } = result.current;

        act( () => {
            decrement();
            reset();
        });

        const { counter } = result.current;
        expect( counter ).toBe( 10 );

    });
    
});
