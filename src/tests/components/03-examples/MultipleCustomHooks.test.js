import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useCounter } from '../../../components/hooks/useCounter';
import { useFetch } from '../../../components/hooks/useFetch';

// we already tested the useFetch so we mock it
jest.mock('../../../components/hooks/useFetch');
jest.mock('../../../components/hooks/useCounter');

describe('Tests on <MultipleCustomHooks />', () => {
    
    beforeEach( () => {
        useCounter.mockReturnValue({
            counter: 10,    
            increment: () => {} 
        });
    });

    test('should render the component', () => {
        
        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });
       
        const wrapper = shallow( <MultipleCustomHooks /> )
        expect( wrapper ).toMatchSnapshot();

    });

    test('should have information', () => {
        
        useFetch.mockReturnValue({
            data: [{
                author: 'Pepe',
                quote: 'Hello World'
            }],
            loading: false,
            error: null
        });

        const wrapper = shallow( <MultipleCustomHooks /> )
        expect( wrapper.find('.alert').exists() ).toBe( false );
        expect( wrapper.find('.mb-0').text().trim() ).toBe( 'Hello World' );
        expect( wrapper.find('footer').text().trim() ).toBe( 'Pepe' );
    })
    

})
