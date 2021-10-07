import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { generalReducer } from './components/redux/generalReducer';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { sagaWatcher } from './components/store/saga';
import "./index.css";
import App from "./App";

const saga = createSagaMiddleware();
const store = createStore(generalReducer, composeWithDevTools(applyMiddleware(saga)));

saga.run(sagaWatcher);

const app = (
  <React.StrictMode>
    <Provider store={ store }>
      <Router>
       <App />
      </Router>
    </Provider>
  </React.StrictMode>)

ReactDOM.render(
  app,
  document.getElementById("root")
);
function sagaWatcher(sagaWatcher: any) {
  throw new Error("Function not implemented.");
}

