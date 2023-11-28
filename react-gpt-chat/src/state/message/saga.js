import { all, call, put, takeLeading, takeEvery } from 'redux-saga/effects';
import { actions, types } from './index';
import { callApi } from '../../api/dummy';
import { callOpenAIApi } from '../../api/chatgpt';

function* fetchUserMessage(action){
    yield put(actions.pendingMessageState(true));
    yield put(actions.addMessage(action.message));

    const response = yield call(callOpenAIApi, {
        role: action.message.role,
        content: action.message.content,
    });

    if (response){
        yield put(actions.addMessage(response));
    }

    yield put(actions.pendingMessageState(false));
}

export default function* (){
    yield all([takeEvery(types.REQUEST_MESSAGE, fetchUserMessage)]);
}