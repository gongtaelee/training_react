import React, { useState } from 'react';
import { actions } from '../../state/message'
import { useDispatch } from 'react-redux';
import { makeMessage } from '../../common/message-helper';

export default function FooterContainer(){
    const [inputMessage, setInputMessage] = useState('');
    const dispatch = useDispatch();
    function onSendMessage(){
        dispatch(actions.requestMessage(makeMessage('user', inputMessage)));
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