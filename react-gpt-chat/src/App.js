import React from 'react';
import store from './common/store';
import { Provider } from 'react-redux';
import HeaderContainer from './components/Header/HeaderContainer';
import MainContainer from './components/Main/MainContainer';
import FooterContainer from './components/Footer/FooterContainer';
import './App.css';

export default function App() {
    return (
        <Provider store={store}>
        <div className='App'>
            <header>
                <HeaderContainer />
            </header>
            <section>
                <MainContainer />
                <FooterContainer />
            </section>
        </div>
        </Provider>
    );
}
