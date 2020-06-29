import React from 'react';
import { render } from 'enzyme';

import App from '../App';

describe('<App />', () => {
  it('to match snapshot.', () => {
    // When
    const snapshot = render(<App />);
    // Then
    expect(snapshot).toMatchSnapshot();
  });
});
