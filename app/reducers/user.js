// @flow
import { SET_USER } from '../actions/user';
import { setLocaleData } from '../services/localStorage';

export type userStateType = {
  user: Object
};

type actionType = {
  type: string,
  payload: any,
};

export default function user(state: Object = {}, action: actionType) {
  switch (action.type) {
    case SET_USER:
    const { name } = action.payload;
      setLocaleData({user: {...state, name }});
      return {...state, name };
    default:
      return state;
  }
}
