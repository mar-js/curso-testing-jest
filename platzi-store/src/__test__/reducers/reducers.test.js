import reducer from '../../reducers';
import PRODUCT_MOCK from '../../__mocks__/ProductMock';

describe('Reducers', () => {
  test('Return initialState', () => expect(reducer({}, '')).toEqual({}));
  test('ADD_TO_CART Reducer', () => {
    const INITIAL_STATE = { cart: [] };
    const PAYLOAD = PRODUCT_MOCK;
    const ACTION = {
      type: 'ADD_TO_CART',
      payload: PAYLOAD,
    };
    const EXPECTED = { cart: [PRODUCT_MOCK] };

    expect(reducer(INITIAL_STATE, ACTION)).toEqual(EXPECTED);
  });
});
