import { all, call, put, takeLeading, takeEvery } from 'redux-saga/effects';
import { actions, types } from './index';
import { callOpenAIApi } from '../../api/chatgpt';
import { apiPost } from '../../api';

function* fetchUserMessage(action){
    yield put(actions.pendingMessageState(true));
    yield put(actions.addMessage(action.message));

    try
    {
        // rest api 교체
        const response = yield call(callOpenAIApi, {
            role: action.message.role,
            content: action.message.content,
        });
        if (response){
            yield put(actions.addMessage(response));
        }
    }catch(error){

    }

    yield put(actions.pendingMessageState(false));
}

function* fetchEvaluationMessage(action){
    try{
        // rest api 작성
         const response = yield call(apiPost, {
             endPoint: '/bqai/api/v1/user/login',
             data: {secretKey : action.user.secretKey},
         });
         if (response){
             yield put(actions.setValue('user', response));
         }
     } catch (error){
         // 에러 처리 검토
         // console.log(error)
     }
}

export default function* (){
    // takeLatest 늦은 우선순위 (처음 들어온것을 취소하고 나중에 들어온걸 실행)
    // takeLeading 처음 우선순위 (처음 들어온것이 끝나야함)
    yield all([takeLeading(types.REQUEST_MESSAGE, fetchUserMessage)]);
}