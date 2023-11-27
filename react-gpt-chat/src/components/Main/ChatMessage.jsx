import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../state/user/selector';
import { getPendingMessageState } from '../../state/message/selector';

export default function ChatMessage(props){
    const { role, content } = props.message;
    const dispatch = useDispatch();
    const currentUser = useSelector(getUser);
    const isPendingMessageState = useSelector(getPendingMessageState);
    // const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
    const messageClass = 'sent';
    return (
        <div className={`message ${messageClass}`}>
            <p>{role} {content}</p>
        </div>
    );
}