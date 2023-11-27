import { all, call, put, takeLeading, takeEvery } from 'redux-saga/effects';
import { actions, types } from './index';
import { callApi } from '../../api';

function* fetchUserMessage(action){
    const message = action.message.content
    const { isSuccess, data } = yield call(callApi, {
        url: '',
        params: { message },
    });

    if (isSuccess && data){
        yield put(actions.setValue(''))
    }

    yield put(actions.pendingMessageState(true)); // 리덕스 액션을 발생 시킴
    yield put(actions.addMessage(action.message));
    // yield call(callApiLike);
    yield put(actions.pendingMessageState(false));
}

export default function* (){
    yield all([takeEvery(types.REQUEST_MESSAGE, fetchUserMessage)]);
}