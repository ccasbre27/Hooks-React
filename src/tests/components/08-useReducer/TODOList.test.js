
import { shallow } from 'enzyme';
import { TODOList } from './../../../components/08-useReducer/TODOList';
import { demoTodos } from './../../fixtures/demoTodos';

describe('Tests on <TODOList />', () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();
    
    const wrapper = shallow( 
        <TODOList 
            todos={ demoTodos }
            handleDelete={ handleDelete }
            handleToggle={ handleToggle }
        />
    );

    test('should render the component', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });

    test('should have two <TODOListItem />', () => {
       
        expect( wrapper.find('TODOListItem').length ).toBe( demoTodos.length );
        expect( wrapper.find('TODOListItem').at( 0 ).prop( 'handleDelete' ) ).toEqual( expect.any(Function) );

    });
        
});
