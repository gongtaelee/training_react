import React, { useEffect } from 'react';
import HeaderContainer from './components/Header/HeaderContainer';
import MainContainer from './components/Main/MainContainer';
import FooterContainer from './components/Footer/FooterContainer';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actions } from './state/user'
import './App.css';

export default function App() {
    const [queryParameters] = useSearchParams()
    const encryptionKey = queryParameters.get("key");
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actions.responseUser({ secretKey: encryptionKey }));
    },[encryptionKey]);

    return (
        <div className='App'>
            <header>
                <HeaderContainer />
            </header>
            <section>
                <MainContainer />
                <FooterContainer />
            </section>
        </div>
    );
}
