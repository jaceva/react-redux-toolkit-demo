import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import "./index.css";
import App from "./app/App";
import allThingsReducer from "./features/allThings/allThingsSlice";
import myThingsReducer from "./features/myThings/myThingsSlice";
import searchReducer from "./features/search/searchSlice";

const rootReducer = combineReducers({
  myThings: myThingsReducer,
  search: searchReducer,
  allThings: allThingsReducer
});

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
