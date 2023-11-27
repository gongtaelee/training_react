import React from 'react';
import { useSelector } from 'react-redux';
// import { getUser } from '../../state/user/selector';
import { getPendingMessageState } from '../../state/message/selector';

export default function ChatMessage(props){
    const { role, content } = props.message;
    // const currentUser = useSelector(getUser);
    const isPendingMessageState = useSelector(getPendingMessageState);
    const messageClass = role === 'user' ? 'sent' : 'received';
    return (
        <div className={`message ${messageClass}`}>
            <p>{role} {content}</p>
        </div>
    );
}