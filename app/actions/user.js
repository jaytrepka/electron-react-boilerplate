// @flow
import type { userStateType } from '../reducers/user';

type actionType = {
  type: string,
  payload: Object,
};

export const SET_USER = 'SET_USER';

export function setUser(name: string) {
  return {
    type: SET_USER,
    payload: { name },
  };
}
