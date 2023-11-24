import React, { useEffect, useReducer } from 'react';
import { getNextFriend } from '../../common/mockData';
import store from '../../common/store';
import FriendList from '../component/FriendList';
import { addFriend } from '../state';

export default function FriendMain(){
    const [, forceUpdate] = useReducer(v => v + 1, 0); // 상태값 변경 함수를 호출할 때마다 상태값을 변경함
    useEffect(() => {
        // 스토어 값이 변경되었을 때 상태변경 함수 호출하도록 의도한 것이며
        // 스토어 액션 처리가 끝나면(dispatch) TimelineMain 컴포넌트가 랜더링 되도록 하기 위함임
        const unsubscribe = store.subscribe(() => forceUpdate()); 
        return () => unsubscribe();
    }, []);

    function onAdd(){
        const friend = getNextFriend();
        store.dispatch(addFriend(friend));
    }
    console.log('FriendMain render');
    const friends = store.getState().friend.friends;
    console.log(friends)
    return (
        <div>
            <button onClick={onAdd}>친구 추가</button>
            <FriendList friends={friends}></FriendList>
        </div>
    );
}