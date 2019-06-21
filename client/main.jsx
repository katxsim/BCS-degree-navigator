import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { render } from "react-dom";
import { Meteor } from "meteor/meteor";
import App from "/imports/ui/App";
import rootReducer from "../imports/ui/reducers/rootReducer";

const store = createStore(rootReducer);

Meteor.startup(() => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("react-target")
  );
});
// serviceWorker.unregister();
