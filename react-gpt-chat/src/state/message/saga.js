import { all, call, put, takeLeading, takeEvery } from 'redux-saga/effects';
import { actions, types } from './index';
import { callApi } from '../../api';

function* fetchUserMessage(action){

    yield put(actions.pendingMessageState(true)); // 리덕스 액션을 발생 시킴
    yield put(actions.addMessage(action.message));

    const message = action.message.content
    const { isSuccess, data } = yield call(callApi, {
        url: '',
        params: { message },
    });

    if (isSuccess && data){
        // 서버에서 받은 데이터 파싱 필요
        yield put(actions.addMessage(action.message));
    }

    yield put(actions.pendingMessageState(false));
}

export default function* (){
    yield all([takeEvery(types.REQUEST_MESSAGE, fetchUserMessage)]);
}