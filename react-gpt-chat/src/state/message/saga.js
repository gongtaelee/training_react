import { all, call, put, takeLeading, takeEvery } from 'redux-saga/effects';
import { actions, types } from './index';
import { callApi } from '../../api';
import { callOpenAIApi } from '../../api/chatgpt';

function* fetchUserMessage(action){

    yield put(actions.pendingMessageState(true)); // 리덕스 액션을 발생 시킴
    yield put(actions.addMessage(action.message));

    const response = yield call(callOpenAIApi, {
        role: action.message.role,
        content: action.message.content,
    });

    if (response){
        yield put(actions.addMessage(response));
        // 서버에서 받은 데이터 파싱 필요
        // yield put(actions.addMessage(data));
    }

    yield put(actions.pendingMessageState(false));
}

export default function* (){
    yield all([takeEvery(types.REQUEST_MESSAGE, fetchUserMessage)]);
}