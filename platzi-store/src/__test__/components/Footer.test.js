import React from 'react';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';

import Footer from '../../components/Footer';

describe('<Footer />', () => {
  const FOOTER = mount(<Footer />);

  test('Render component <Footer />', () => expect(FOOTER.length).toEqual(1));

  test('Render title <Footer />', () => expect(FOOTER.find('.Footer-title').text()).toEqual('Platzi Store'));
});

describe('<Footer /> Snapshot', () => test('UI component <Footer />', () => {
  const FOOTER = create(<Footer />);
  expect(FOOTER.toJSON()).toMatchSnapshot();
}));
