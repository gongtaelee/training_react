import { createReducer } from '../../common/redux-helper';
import { getInitializeMessage } from '../../common/message-helper'

export const types = {
  REQUEST_MESSAGE: 'message/REQUEST_MESSAGE',
  ADD_MESSAGE: 'message/ADD_MESSAGE',
  PENDING_MESSAGE_STATE: 'message/PENDING_MESSAGE_STATE',
}

export const actions = {
  requestMessage: message => ({ type: types.REQUEST_MESSAGE, message}),
  addMessage: message => ({ type : types.ADD_MESSAGE, message}),
  pendingMessageState: isPendingMessageState => ({type : types.PENDING_MESSAGE_STATE, isPendingMessageState}),
}

const INITIAL_STATE = { messages: [ getInitializeMessage ], isPendingMessageState: false };
const reducer = createReducer(INITIAL_STATE, {
  [types.ADD_MESSAGE]: (state, action) => state.messages.push(action.message),
  [types.PENDING_MESSAGE_STATE]: (state, action) => state.isPendingMessageState = action.isPendingMessageState,
});

export default reducer;