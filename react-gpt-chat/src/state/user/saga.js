import { all, call, put, takeLeading, takeEvery } from 'redux-saga/effects';
import { actions, types } from './index';
import { apiGet } from '../../api';

function* fetchUser(action){
    /*
    아래의 내용은 텔레피아 사용자 접근에 따라 변경될 수 있음
        1. 텔레피아에서 암호화 키 값 받음 (첫 페이지 로딩 시 진행)
        2. 받은 키 값을 그대로 백엔드로 전달
        3. 백엔드에서 복호화 후 사용자 데이터 추출
        4. 백엔드에서 받은 사용자 데이터 활용 (토큰이 필요한 api 요청 시)
    */
    const response = yield call(apiGet, {
        endPoint: '/bqai/api/v1/user/login',
        data: {secretKey : action.user.secretKey},
    });

    // to do 
    // 예외 처리

    if (response){
        yield put(actions.setValue('user', response));
    }
}

export default function* (){
    yield all([takeLeading(types.RESPONSE_USER, fetchUser)]);
}