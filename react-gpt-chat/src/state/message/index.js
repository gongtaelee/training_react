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
  pendingMessageState: isPendingMessage => ({type : types.PENDING_MESSAGE_STATE, isPendingMessage}),
}

const INITIAL_STATE = { messages: [ getInitializeMessage ], isPendingMessage: false };
const reducer = createReducer(INITIAL_STATE, {
  [types.ADD_MESSAGE]: (state, action) => state.messages.push(action.message),
  [types.PENDING_MESSAGE_STATE]: (state, action) => state.isPendingMessage = action.isPendingMessage,
});

export default reducer;