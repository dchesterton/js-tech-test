import React from 'react';
import {shallow} from 'enzyme';

import {Map} from 'immutable';

import Market from './Market';
import OutcomeListContainer from './OutcomeListContainer';

it('renders without crashing', () => {
    shallow(<Market market={Map()} />);
});

it('renders name', () => {
    const name = 'Market Name';
    const market = Map({name});
    const wrapper = shallow(<Market market={market} />);

    expect(wrapper).toIncludeText(name);
});

it('renders outcomes when showOutcomes prop is true', () => {
    const wrapper = shallow(<Market market={Map()} showOutcomes={true} />);
    expect(wrapper.find(OutcomeListContainer)).toHaveLength(1);
});

it('does not render outcomes when showOutcomes prop is false', () => {
    const wrapper = shallow(<Market market={Map()} showOutcomes={false} />);

    expect(wrapper.find(OutcomeListContainer)).toHaveLength(0);
});

it('toggles outcomes on click', () => {
    const wrapper = shallow(<Market market={Map()} />);

    const title = wrapper.find('h5');

    // test that a click shows the outcomes
    title.simulate('click');
    expect(wrapper.find(OutcomeListContainer)).toHaveLength(1);

    // ... and that another click hides it again
    title.simulate('click');
    expect(wrapper.find(OutcomeListContainer)).toHaveLength(0);
});
