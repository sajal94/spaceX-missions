import * as React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import * as enzyme from 'enzyme';
import { NavBar } from '../components/NavBar';

import { mount, ReactWrapper } from 'enzyme';

enzyme.configure({ adapter: new Adapter() });

const mockOnNavButtonClick = jest.fn();

describe('NavBar tests', () => {
	let wrapper: ReactWrapper;

	beforeEach(() => {
		wrapper = mount(<NavBar onNavButtonClick={mockOnNavButtonClick} />);
	});

	afterEach(() => {
		jest.resetAllMocks();
		wrapper.unmount();
	});

	it('should render NavBar', () => {
		expect(wrapper.exists(NavBar)).toBeTruthy();
	});

    it('should call onNavButtonClick method when clicking on successful launch true button', () => {
		wrapper.find("#launchButtonTrue")
        .simulate('click');
        expect(mockOnNavButtonClick).toBeCalled();
    });
});



