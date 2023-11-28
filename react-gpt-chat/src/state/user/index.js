import { createReducer, createSetValueAction, setValueReducer } from '../../common/redux-helper';

/*
user:
id, sessionToken, thumbnailUrl
*/

export const types = {
  SetValue: 'user/SetValue',
  RESPONSE_USER: 'user/RESPONSE_USER',
  SECRET_KEY: 'user/SECRET_KEY',
  // LOGIN: 'user/LOGIN',
  // LOGOUT: 'user/LOGOUT',
  // EDIT: 'user/EDIT',
}

export const actions = {
  setValue: createSetValueAction(types.SetValue),
  responseUser: user => ({ type: types.RESPONSE_USER, user}),
  // login: user => ({ type: types.REQUEST_CURRENT_USER, user}),
  // logout: user => ({ type: types.REQUEST_CURRENT_USER, user}),
  // Edit: user => ({ type: types.REQUEST_CURRENT_USER, user}),
}

const INITIAL_STATE = { user: undefined, isPendingMessageState: false };
const reducer = createReducer(INITIAL_STATE, {
  [types.SetValue]: setValueReducer,
  
  // [types.LOGIN]: (state, action) => state.user = action.user,
  // [types.LOGOUT]: (state, action) => {
  //   if (state.user.publicId === action.user.publicId)
  //     state.user = {}
  // },
  // [types.EDIT]: (state, action) => {
  //   if (state.user.publicId === action.user.publicId){
  //     state.user = action.user;
  //   }
  // },
});

export default reducer;