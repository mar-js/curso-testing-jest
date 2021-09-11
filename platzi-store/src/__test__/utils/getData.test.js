import GET_DATA from '../../utils/getData';

describe('Fetch Api', () => {
  beforeEach(() => fetch.resetMocks());

  test('Call Api and return Data', () => {
    const GOOGLE = 'https://google.com';

    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));

    GET_DATA(GOOGLE)
      .then(({ data }) => expect(data).toEqual('12345'));

    expect(fetch.mock.calls[0][0]).toEqual(GOOGLE);
  });
});
