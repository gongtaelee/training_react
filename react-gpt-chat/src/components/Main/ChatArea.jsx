import React, { useEffect, useRef } from 'react';
import ChatMessage from './ChatMessage';
import { getMessages } from '../../state/message/selector';
import { useSelector } from 'react-redux';

export default function ChatArea(){

    const dummy = useRef();
    const messages = useSelector(getMessages);

    useEffect(() => {
        dummy.current.scrollIntoView({ behavior: 'smooth' });
    }, [messages])

    return(
        <ul>
            {messages && messages.map((message, index) => {
                return <ChatMessage key={index} message={message}></ChatMessage>;
            })}
            <span ref={dummy}></span>
        </ul>
    );
}