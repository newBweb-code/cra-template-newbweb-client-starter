import React from 'react';
import { shallow } from 'enzyme';

import ExternalLink from '../ExternalLink';

describe('<ExternalLink />', () => {
  it('to require href prop.', () => {
    // Given
    global.console.error = jest.fn();
    // When
    shallow(<ExternalLink>Test</ExternalLink>);
    // Then
    expect(global.console.error.mock.calls[0][0]).toMatch(/.+(Failed prop type).+(href)/);
  });

  it('render use title prop when available.', () => {
    // Given
    global.console.error = jest.fn();
    // When
    const wrapper = shallow(<ExternalLink href="#" title="Test" />);
    // Then
    expect(wrapper.contains('Test')).toBeTruthy();
  });

  it('render children if no title is provided.', () => {
    // Given
    global.console.error = jest.fn();
    // When
    const wrapper = shallow(<ExternalLink href="#">Test</ExternalLink>);
    // Then
    expect(wrapper.contains('Test')).toBeTruthy();
  });

  it('render href if no title and children are provided.', () => {
    // Given
    global.console.error = jest.fn();
    // When
    const wrapper = shallow(<ExternalLink href="#" />);
    // Then
    expect(wrapper.contains('#')).toBeTruthy();
  });

  it('must output rel="noopener noreferrer".', () => {
    // When
    const wrapper = shallow(<ExternalLink href="#" title="Test" />);
    // Then
    expect(wrapper.props().rel).toEqual('noopener noreferrer');
  });
});
