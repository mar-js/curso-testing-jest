import action from '../../actions';
import PRODUCT_MOCK from '../../__mocks__/ProductMock';

describe('Actions', () => test('addToCart Action', () => {
  const PAYLOAD = PRODUCT_MOCK;
  const EXPECTED = {
    type: 'ADD_TO_CART',
    payload: PAYLOAD,
  };
  expect(action.addToCart(PAYLOAD)).toEqual(EXPECTED);
}));
