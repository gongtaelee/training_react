import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getNextFriend } from '../../common/mockData';
import { MAX_AGE_LIMIT, MAX_SHOW_LIMIT } from '../common';
import FriendList from '../component/FriendList';
import { actions } from '../state';
import NumberSelect from '../component/NumberSelect';
import { getAgeLimit, getFriendsWithAgeLimit, getFriendsWithAgeShowLimit, getShowLimit } from '../state/selector';

export default function FriendMain(){
    // 리덕스에서 액션 처리(dispatch)되면 반환의 이전값을 기억하고, 값이 변경되었을 때 컴포넌트를 다시 랜더링해줌
    // const [
    //     ageLimit,
    //     showLimit,
    //     friendsWithAgeLimit,
    //     friendsWithAgeShowLimit,
    // ] = useSelector(
    //     state =>[
    //         getAgeLimit(state),
    //         getShowLimit(state),
    //         getFriendsWithAgeLimit(state),
    //         getFriendsWithAgeShowLimit(state),
    //     ], shallowEqual);
    // const dispatch = useDispatch();
    // function onAdd(){
    //     const friend = getNextFriend();
    //     dispatch(addFriend(friend));
    // }
    const ageLimit = useSelector(getAgeLimit);
    const showLimit = useSelector(getShowLimit);
    const friendsWithAgeLimit = useSelector(getFriendsWithAgeLimit);
    const friendsWithAgeShowLimit = useSelector(getFriendsWithAgeShowLimit);
    const dispatch = useDispatch();
    function onAdd(){
        const friend = getNextFriend();
        dispatch(actions.addFriend(friend));
    }
    console.log('FriendMain render');
    return (
        // 리덕스에서는 원본 데이터를 저장하고
        // 필터 연산은 컴포넌트에서 진행하는 방법이 있음
        // reselect
        <div>
            <button onClick={onAdd}>친구 추가</button>
            <NumberSelect
                // onChange={v => dispatch(setAgeLimit(v))} // 값을 간단하게 할당하는 코드라면 아래처럼 간편히 작성 가능함
                onChange={v => dispatch(actions.setValue('ageLimit', v))}
                value={ageLimit}
                options={AGE_LIMIT_OPTIONS}
                postfix="세 이하만 보기"
            />
            <FriendList friends={friendsWithAgeLimit} />
            <NumberSelect
                // onChange={v => dispatch(setShowLimit(v))}
                onChange={v => dispatch(actions.setValue('showLimit', v))}
                value={showLimit}
                options={SHOW_LIMIT_OPTIONS}
                postfix="명 이하만 보기 (연령 제한 적용)"
            />
            <FriendList friends={friendsWithAgeShowLimit} />
        </div>
    );
}

const AGE_LIMIT_OPTIONS = [15, 20, 25, MAX_AGE_LIMIT];
const SHOW_LIMIT_OPTIONS = [2, 4, 6, MAX_SHOW_LIMIT];