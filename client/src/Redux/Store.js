import { createStore,applyMiddleware } from "redux";
import rootReducer from "./Reducer/RootReducer";
import thunk from "redux-thunk";



// //redux middlewares
// const middlewares = [thunk];

// if (process.env.NODE_ENV === "development") {
//     const { logger } = require("redux-logger");
    
//     middlewares.push(logger);
// }

// const store = createStore(rootReducer, {}, applyMiddleware(...middlewares));

// export default store;


// redux middlewares
const middlewares = [thunk];

if (process.env.NODE_ENV === "development") {
  const { logger } = require("redux-logger");

  middlewares.push(logger);
}

const store = createStore(rootReducer, {}, applyMiddleware(...middlewares));

export default store;
