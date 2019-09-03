import React from "react";
import { Provider } from "react-redux";
import store from "store";
import MainView from 'views/MainView';
import GlobalStyle from 'theme/GlobalStyle';

const Root = () => (
  <Provider store={store}>
    <GlobalStyle />
    <MainView />
  </Provider>
);

export default Root;
