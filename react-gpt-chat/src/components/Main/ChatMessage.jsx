import React from 'react';
import { useSelector } from 'react-redux';
// import { getUser } from '../../state/user/selector';
import { getPendingMessageState } from '../../state/message/selector';

export default function ChatMessage(props){
    const { role, content } = props.message;
    // const currentUser = useSelector(getUser);
    const isPendingMessageState = useSelector(getPendingMessageState);
    const messageClass = role === 'user' ? 'sent' : 'received';
    /*
    시스템은 이미지 있음
    사용자는 이미지 없음
    */
    return (
        <div className={`message ${messageClass}`}>
            <p>{role} {content}</p>
        </div>
    );
}