import { createReducer } from '../../common/redux-helper';

/*
user:
id, token, thumbnailUrl
*/

export const types = {
  REQUEST_CURRENT_USER: 'user/REQUEST_CURRENT_USER',
  LOGIN: 'user/LOGIN',
  LOGOUT: 'user/LOGOUT',
  EDIT: 'user/EDIT',
}

export const actions = {
  requestCurrentUser: user => ({ type: types.REQUEST_CURRENT_USER, user}),
  login: user => ({ type: types.REQUEST_CURRENT_USER, user}),
  logout: user => ({ type: types.REQUEST_CURRENT_USER, user}),
  Edit: user => ({ type: types.REQUEST_CURRENT_USER, user}),
}

const INITIAL_STATE = { user: {}, isPendingMessageState: false };
const reducer = createReducer(INITIAL_STATE, {
  [types.LOGIN]: (state, action) => state.user = action.user,
  [types.LOGOUT]: (state, action) => {
    if (state.user.id === action.user.id)
      state.user = {}
  },
  [types.EDIT]: (state, action) => {
    if (state.user.id === action.user.id){
      state.user = action.user;
    }
  },
});

export default reducer;