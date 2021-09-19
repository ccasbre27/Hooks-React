
import { shallow } from 'enzyme';
import { TODOListItem } from './../../../components/08-useReducer/TODOListItem';
import { demoTodos } from './../../fixtures/demoTodos';

describe('Tests on <TODOListItem />', () => {
   
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();
    const index = 1;
    const currentTODO = demoTodos[0];

    const wrapper = shallow( 
        <TODOListItem 
            index={ index }
            todo={ currentTODO } 
            handleDelete={ handleDelete }
            handleToggle={ handleToggle } /> 
    );

    test('should render the component', () => {
        
        expect( wrapper ).toMatchSnapshot();
    
    });

    test('should call delete function', () => {
        
        wrapper.find('button').simulate('click');
        expect( handleDelete ).toHaveBeenCalledWith( currentTODO.id );

    });
    
    test('should call toggle function', () => {
        
        wrapper.find('p').simulate('click');
        expect( handleToggle ).toHaveBeenCalledWith( currentTODO.id );

    });

    test('should render the text as expected', () => {
        
        const p = wrapper.find('p');
        expect( p.text() ).toEqual( ` ${ index + 1 }. ${ currentTODO.description } ` );
    
    });

    test('should apply the complete class', () => {
        
        currentTODO.done = true;
        
        const wrapper = shallow( 
            <TODOListItem 
                index={ index }
                todo={ currentTODO } 
                handleDelete={ handleDelete }
                handleToggle={ handleToggle } /> 
        );

        const p = wrapper.find('p');
        expect( p.hasClass('complete') ).toBeTruthy();
    
    });
    

});
