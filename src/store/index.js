import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import reducers from "./reducers";
import rootSaga from "./sagas";

export default function configureStore() {
  const reduxSagaMiddleware = createSagaMiddleware();
  const middlewares =
    process.env.NODE_ENV === "development"
      ? [reduxSagaMiddleware, logger]
      : [reduxSagaMiddleware];
  const store = createStore(reducers, applyMiddleware(...middlewares));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("./reducers", () => {
      const nextRootReducer = require("./reducers/index");
      store.replaceReducer(nextRootReducer);
    });
  }

  return {
    ...store,
    runSaga: () => reduxSagaMiddleware.run(rootSaga)
  };
}
