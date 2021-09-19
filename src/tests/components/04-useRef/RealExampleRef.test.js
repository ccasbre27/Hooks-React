import { shallow } from "enzyme"
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';

describe('Tests on <RealExampleRef />', () => {

    // shallow allow us to get the component in an isolated way
    const wrapper = shallow( <RealExampleRef /> );
    
    test('should render the component', () => {
        
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('MultipleCustomHooks').exists() ).toBeFalsy();

    });

    test('should render <MultipleCustomHooks />', () => {
        
        wrapper.find('button').simulate('click');
        expect( wrapper.find('MultipleCustomHooks').exists() ).toBeTruthy();

    });

});
