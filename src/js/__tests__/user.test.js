import { loadUser } from '../user';

import { httpGet } from '../http';

jest.mock('../http');

describe('loadUser', () => {
  test('calls Http get with user ID', () => {
    httpGet.mockReturnValue('{}');

    loadUser(1);

    expect(httpGet).toBeCalledWith('http://server:8080/users/1');
  });
});
