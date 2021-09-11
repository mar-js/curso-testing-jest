import React from 'react';
import { mount, shallow } from 'enzyme';

import ProviderMock from '../../__mocks__/ProviderMock';
import PRODUCT_MOCK from '../../__mocks__/ProductMock';
import Product from '../../components/Product';

describe('<Product />', () => {
  test('Render component <Product />', () => {
    const PRODUCT = shallow(
      <ProviderMock>
        <Product />
      </ProviderMock>,
    );

    expect(PRODUCT.length).toEqual(1);
  });

  test('Click btn buy <Product />', () => {
    const HANDLE_ADD_TO_CART = jest.fn();
    const PRODUCT = mount(
      <ProviderMock>
        <Product
          product={PRODUCT_MOCK}
          handleAddToCart={HANDLE_ADD_TO_CART}
        />
      </ProviderMock>,
    );

    PRODUCT.find('button').simulate('click');
    expect(HANDLE_ADD_TO_CART).toHaveBeenCalledTimes(1);
  });
});
