/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import store from './store';

// Components
import Header from './components/Layouts/Header';
import Footer from './components/Layouts/Footer';
import Home from './components/Pages/Home';
// @ts-ignore-bloc
const App: () => React$Node = () => {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Home />
        <Footer />
      </Provider>
    </>
  );
};

export default App;
