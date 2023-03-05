import {combineReducers} from '@reduxjs/toolkit';

import counterReducer from './Counter';
import userReducer, {userAPI} from './User';

export const combinedReducer = combineReducers({
  ...userReducer,
  ...counterReducer
});

export const combinedMiddleware = userAPI.middleware;
