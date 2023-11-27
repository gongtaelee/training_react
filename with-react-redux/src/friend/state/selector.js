// 데이터 가공 파트

import { createSelector } from 'reselect';

const getFriends = state => state.friend.friends;
export const getAgeLimit = state => state.friend.ageLimit;
export const getShowLimit = state => state.friend.showLimit;

// createSelector 이용하여 선택자 함수를 만들면 메모리제이션 기능을 함
export const getFriendsWithAgeLimit = createSelector(
    [getFriends, getAgeLimit],
    // 매게 변수의 두 값이 달라졌을 때만 다시 실행함
    (friends, ageLimit) => friends.filter(item => item.age <= ageLimit),
);
export const getFriendsWithAgeShowLimit = createSelector(
    [getFriendsWithAgeLimit, getShowLimit],
    (friendsWithAgeLimit, showLimit) => friendsWithAgeLimit.slice(0, showLimit),
);