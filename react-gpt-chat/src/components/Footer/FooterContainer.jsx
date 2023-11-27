import React, { useState } from 'react';
import { actions } from '../../state/message'
import { useDispatch } from 'react-redux';

export default function FooterContainer(){
    const [inputMessage, setInputMessage] = useState('');

    const dispatch = useDispatch();
    function onSendMessage(){
        const message = {
            role: "user",
            content: inputMessage,
        };
        dispatch(actions.requestMessage(message));
        setInputMessage('');
    }

    return(
        <footer>
            {/* <img src={""} /> */}
            <input 
                value={inputMessage} 
                onChange={(e) => setInputMessage(e.target.value)} 
                placeholder="Message..." />
            <button 
                onClick={onSendMessage}
            >SEND</button>
        </footer>
    );
}