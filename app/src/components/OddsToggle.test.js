import React from 'react';
import {shallow} from 'enzyme';

import OddsToggle, {OddsButton} from './OddsToggle';

it('renders without crashing', () => {
    shallow(<OddsToggle display="fractional" onChange={()=>{}} />);
});

it('renders active button', () => {
    const wrapper = shallow(<OddsToggle display="fractional" onChange={()=>{}} />);

    const fractionalButton = wrapper.find(OddsButton).at(0);
    const decimalButton = wrapper.find(OddsButton).at(1);

    expect(fractionalButton).toHaveProp('title', 'Fractional');
    expect(fractionalButton).toHaveProp('active', true);

    expect(decimalButton).toHaveProp('title', 'Decimal');
    expect(decimalButton).toHaveProp('active', false);
});

it('calls onChange prop', () => {
    let onChangeCalled = false;

    const onChange = display => {
        expect(display).toEqual('decimal');
        onChangeCalled = true;
    };

    const wrapper = shallow(<OddsToggle display="fractional" onChange={onChange} />);

    const decimalButton = wrapper.find(OddsButton).at(1);
    decimalButton.simulate('click');

    expect(onChangeCalled).toEqual(true);
});
