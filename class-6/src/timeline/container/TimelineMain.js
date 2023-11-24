import React, { useEffect, useReducer } from 'react';
import { getNextTimeline } from '../../common/mockData';
import store from '../../common/store';
import TimelineList from '../component/TimelineList';
import { addTimeline } from '../state';

export default function TimelineMain(){
    const [, forceUpdate] = useReducer(v => v + 1, 0); // 상태값 변경 함수를 호출할 때마다 상태값을 변경함
    useEffect(() => {
        // 스토어 값이 변경되었을 때 상태변경 함수 호출하도록 의도한 것이며
        // 스토어 액션 처리가 끝나면(dispatch) TimelineMain 컴포넌트가 랜더링 되도록 하기 위함임
        const unsubscribe = store.subscribe(() => forceUpdate()); 
        return () => unsubscribe();
    }, []);

    function onAdd(){
        const timeline = getNextTimeline();
        console.log(timeline)
        store.dispatch(addTimeline(timeline));
    }
    console.log('TimelineMain render');
    const timelines = store.getState().timeline.timelines;
    return (
        <div>
            <button onClick={onAdd}>타임라인 추가</button>
            <TimelineList timelines={timelines}></TimelineList>
        </div>
    );
}