import type {IReduxUser} from '@Interfaces';

import {makeStore} from '../..';
import {initialState, userAPI} from '.';

describe('User slice test', () => {
  it('Should return a correct initial state', () => {
    expect(initialState).toEqual({
      duplicateUsers: []
    } as IReduxUser.IInitialState);
  });
});

describe('User query test', () => {
  it('Should duplicate the data to user reducer', async () => {
    const store = makeStore({isServer: true});

    await store.dispatch(userAPI.endpoints.getUsers.initiate({}, {}));

    expect(
      store.getState()?.user?.duplicateUsers?.data?.length
    ).toBeGreaterThan(0);
  });
});
